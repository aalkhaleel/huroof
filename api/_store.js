const STATE_KEY = "huroof:state";
const BUZZ_KEY = "huroof:buzz";
const DEFAULT_ROOM = "000000";

const memoryStore = globalThis.__HUROOF_MEMORY_STORE__ ||= {
  values: {},
};

if (!memoryStore.values) {
  memoryStore.values = {};
}

function normalizeRoom(value) {
  const room = String(value || "")
    .trim()
    .replace(/\D/g, "")
    .slice(0, 6);

  return room || DEFAULT_ROOM;
}

function getUrl(request) {
  const host = request.headers.host || "localhost";
  return new URL(request.url, `https://${host}`);
}

function getRoom(request) {
  return normalizeRoom(getUrl(request).searchParams.get("room"));
}

function getRoomKey(key, room) {
  return `${key}:${normalizeRoom(room)}`;
}

function getRedisConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  return url && token ? { url: url.replace(/\/$/, ""), token } : null;
}

async function redisCommand(command) {
  const config = getRedisConfig();

  if (!config) {
    return null;
  }

  const response = await fetch(config.url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.error) {
    throw new Error(data.error || `Redis request failed with ${response.status}`);
  }

  return data.result;
}

async function getJSON(key) {
  const config = getRedisConfig();

  if (!config) {
    return memoryStore.values[key] || null;
  }

  const value = await redisCommand(["GET", key]);
  return value ? JSON.parse(value) : null;
}

async function setJSON(key, value) {
  const config = getRedisConfig();

  if (!config) {
    memoryStore.values[key] = value;
    return;
  }

  await redisCommand(["SET", key, JSON.stringify(value)]);
}

async function deleteKey(key) {
  const config = getRedisConfig();

  if (!config) {
    delete memoryStore.values[key];
    return;
  }

  await redisCommand(["DEL", key]);
}

async function readJsonBody(request) {
  if (request.body && typeof request.body === "object") {
    return request.body;
  }

  let body = "";
  for await (const chunk of request) {
    body += chunk;
  }

  return body ? JSON.parse(body) : {};
}

function sendJson(response, statusCode, data) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(data));
}

function sendNoContent(response) {
  response.statusCode = 204;
  response.setHeader("Cache-Control", "no-store");
  response.end();
}

module.exports = {
  STATE_KEY,
  BUZZ_KEY,
  getRoom,
  getRoomKey,
  getJSON,
  setJSON,
  deleteKey,
  readJsonBody,
  sendJson,
  sendNoContent,
};
