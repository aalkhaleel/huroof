(() => {
  const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  const canRegister = "serviceWorker" in navigator && (location.protocol === "https:" || isLocal);
  let installPrompt = null;

  function isStandalone() {
    return window.matchMedia?.("(display-mode: standalone)").matches
      || window.navigator.standalone === true;
  }

  function getInstallStatus() {
    return document.getElementById("install-status");
  }

  function setInstallStatus(message) {
    const status = getInstallStatus();
    if (status) {
      status.textContent = message;
    }
  }

  function handleInstallButton(button) {
    button.addEventListener("click", async () => {
      if (isStandalone()) {
        setInstallStatus("التطبيق مثبت على هذا الجهاز.");
        return;
      }

      if (!installPrompt) {
        location.href = "/install.html";
        return;
      }

      installPrompt.prompt();
      const choice = await installPrompt.userChoice.catch(() => null);
      installPrompt = null;

      if (choice?.outcome === "accepted") {
        setInstallStatus("تم تثبيت التطبيق.");
      }
    });
  }

  if (!canRegister) {
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("[data-install-app]").forEach((btn) => {
        handleInstallButton(btn);
        if (!isStandalone()) {
          btn.removeAttribute("hidden");
        }
      });
    });
  } else {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      installPrompt = event;
    });

    window.addEventListener("appinstalled", () => {
      installPrompt = null;
      setInstallStatus("تم تثبيت التطبيق.");
      document.querySelectorAll("[data-install-app]").forEach((btn) => { btn.hidden = true; });
    });

    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });

    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    });

    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("[data-install-app]").forEach((btn) => {
        handleInstallButton(btn);
        if (!isStandalone()) {
          btn.removeAttribute("hidden");
        }
      });
    });
  }
})();
