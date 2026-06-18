const CACHE_NAME = "huroof-pwa-v20260616-1";

const APP_SHELL = [
  "/",
  "/join.html",
  "/index.html",
  "/presenter.html",
  "/display.html",
  "/start.css?v=20260615-2",
  "/styles.css?v=20260615-2",
  "/display.css?v=20260616-1",
  "/firebase-config.js?v=20260520-2",
  "/sync.js?v=20260520-2",
  "/start.js?v=20260615-selection",
  "/script.js?v=20260615-2",
  "/display.js?v=20260615-3",
  "/pwa.js?v=20260614-1",
  "/manifest.webmanifest",
  "/huroof-preview.png",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-512.png",
  "https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.12.5/firebase-database-compat.js",
];

const NETWORK_ONLY_PATHS = [
  "/api/",
  "/state",
  "/buzz",
  "/events",
  "/network-info"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  // تخزين سكريبتات Firebase CDN في الكاش
  if (url.origin !== self.location.origin) {
    if (request.destination === "script") {
      event.respondWith(
        caches.match(request).then((cached) => {
          if (cached) return cached;
          return fetch(request).then((response) => {
            if (response.ok) {
              caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
            }
            return response;
          });
        })
      );
    }
    return;
  }

  if (NETWORK_ONLY_PATHS.some((path) => url.pathname.startsWith(path))) {
    event.respondWith(fetch(request));
    return;
  }

  // الانتقال بين الصفحات: كاش أولاً ثم تحديث في الخلفية
  if (request.mode === "navigate") {
    event.respondWith((async () => {
      const cached = await caches.match(request, { ignoreSearch: true });
      // تحديث الكاش في الخلفية دون انتظار
      fetch(request).then((response) => {
        if (response.ok) {
          caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
        }
      }).catch(() => {});
      return cached ?? (await fetch(request).catch(() => caches.match("/index.html")));
    })());
    return;
  }

  // الملفات الثابتة: كاش أولاً
  event.respondWith(
    caches.match(request)
      .then((cached) => cached || fetch(request).then((response) => {
        if (response.ok) {
          caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
        }
        return response;
      }))
  );
});
