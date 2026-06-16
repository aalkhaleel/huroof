module.exports = function handler(request, response) {
  const host = request.headers["x-forwarded-host"] || request.headers.host || "";
  const protocol = request.headers["x-forwarded-proto"] || "https";

  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify({
    ips: [],
    port: null,
    displayUrl: host ? `${protocol}://${host}/display.html` : "",
  }));
};
