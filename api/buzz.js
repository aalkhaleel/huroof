const {
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
} = require("./_store");

module.exports = async function handler(request, response) {
  try {
    const room = getRoom(request);
    const stateKey = getRoomKey(STATE_KEY, room);
    const buzzKey = getRoomKey(BUZZ_KEY, room);

    if (request.method === "GET") {
      const url = new URL(request.url, `https://${request.headers.host || "localhost"}`);
      const buzz = await getJSON(buzzKey);

      if (buzz && url.searchParams.get("take") === "1") {
        await deleteKey(buzzKey);
      }

      sendJson(response, 200, buzz || {});
      return;
    }

    if (request.method === "POST") {
      const { team } = await readJsonBody(request);

      if (team !== "red" && team !== "green") {
        sendJson(response, 422, { error: "Invalid team" });
        return;
      }

      const state = await getJSON(stateKey);
      if (
        !state
        || state.phase !== "open"
        || state.selectedIndex === null
        || state.timedOut
        || state.winner
        || state.matchOver
      ) {
        sendJson(response, 409, { error: "No open question" });
        return;
      }

      const existingBuzz = await getJSON(buzzKey);
      if (existingBuzz?.selectedIndex === state.selectedIndex) {
        sendJson(response, 409, { error: "Buzz already taken" });
        return;
      }

      await setJSON(buzzKey, {
        type: "buzz",
        team,
        room,
        selectedIndex: state.selectedIndex,
        at: Date.now(),
      });

      sendNoContent(response);
      return;
    }

    response.setHeader("Allow", "GET, POST");
    sendJson(response, 405, { error: "Method Not Allowed" });
  } catch (error) {
    sendJson(response, 500, { error: error.message });
  }
};
