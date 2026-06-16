const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");

const root = __dirname;
const port = 4173;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
};

const DEFAULT_ROOM = "000000";
const latestStates = new Map();
const sseClients = new Map();

function normalizeRoom(value) {
  const room = String(value || "")
    .trim()
    .replace(/\D/g, "")
    .slice(0, 6);

  return room || DEFAULT_ROOM;
}

function getUrl(request) {
  const host = request.headers.host || `127.0.0.1:${port}`;
  return new URL(request.url, `http://${host}`);
}

function getRoom(request) {
  return normalizeRoom(getUrl(request).searchParams.get("room"));
}

function getRoomClients(room) {
  if (!sseClients.has(room)) {
    sseClients.set(room, new Set());
  }

  return sseClients.get(room);
}

function broadcastEvent(room, data, eventName = "") {
  const eventLine = eventName ? `event: ${eventName}\n` : "";
  const message = `${eventLine}data: ${JSON.stringify(data)}\n\n`;

  for (const client of getRoomClients(room)) {
    client.write(message);
  }
}

function getNetworkIPs() {
  const ips = [];
  for (const ifaces of Object.values(os.networkInterfaces())) {
    for (const iface of ifaces) {
      if (iface.family === "IPv4" && !iface.internal) {
        ips.push(iface.address);
      }
    }
  }
  return ips;
}

const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(request.url.split("?")[0]);

  // SSE stream for display devices
  if (pathname === "/events") {
    const room = getRoom(request);
    response.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    });

    getRoomClients(room).add(response);

    if (latestStates.has(room)) {
      response.write(`data: ${JSON.stringify(latestStates.get(room))}\n\n`);
    }

    request.on("close", () => getRoomClients(room).delete(response));
    return;
  }

  // State push from host page
  if (pathname === "/state" && request.method === "POST") {
    const room = getRoom(request);
    let body = "";
    request.on("data", (chunk) => { body += chunk; });
    request.on("end", () => {
      try {
        const latestState = { ...JSON.parse(body), room };
        latestStates.set(room, latestState);
        broadcastEvent(room, latestState);
        response.writeHead(204);
        response.end();
      } catch {
        response.writeHead(400);
        response.end("Bad Request");
      }
    });
    return;
  }

  if (pathname === "/state" && request.method === "GET") {
    const room = getRoom(request);
    response.writeHead(200, { "Content-Type": "application/json", "Cache-Control": "no-store" });
    response.end(JSON.stringify(latestStates.get(room) || {}));
    return;
  }

  // Buzz request from contestant display
  if (pathname === "/buzz" && request.method === "POST") {
    const room = getRoom(request);
    let body = "";
    request.on("data", (chunk) => { body += chunk; });
    request.on("end", () => {
      try {
        const { team } = JSON.parse(body);

        if (team !== "red" && team !== "green") {
          response.writeHead(422);
          response.end("Invalid team");
          return;
        }

        broadcastEvent(room, { type: "buzz", team, room, at: Date.now() }, "buzz");
        response.writeHead(204);
        response.end();
      } catch {
        response.writeHead(400);
        response.end("Bad Request");
      }
    });
    return;
  }

  // Network info for host UI
  if (pathname === "/network-info") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ ips: getNetworkIPs(), port }));
    return;
  }

  // Static files
  let filePath = pathname === "/" ? "/index.html" : pathname;
  const fullPath = path.resolve(root, `.${filePath}`);

  if (!fullPath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(fullPath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": types[path.extname(fullPath).toLowerCase()] || "application/octet-stream",
    });
    response.end(data);
  });
});

server.listen(port, "0.0.0.0", () => {
  const ips = getNetworkIPs();
  console.log("\n=== مسابقة حروف ===\n");
  console.log(`المقدم:     http://127.0.0.1:${port}`);
  if (ips.length > 0) {
    console.log(`المتسابقون: http://${ips[0]}:${port}/display.html`);
    console.log(`\n(افتح الرابط أعلاه على جهاز المتسابقين)`);
  }
  console.log("");
});
