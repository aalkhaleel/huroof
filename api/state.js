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
      sendJson(response, 200, await getJSON(stateKey) || {});
      return;
    }

    if (request.method === "POST") {
      const state = await readJsonBody(request);
      const previousState = await getJSON(stateKey);

      await setJSON(stateKey, { ...state, room });

      if (
        state.phase !== "open"
        || state.selectedIndex !== previousState?.selectedIndex
      ) {
        await deleteKey(buzzKey);
      }

      sendNoContent(response);
      return;
    }

    response.setHeader("Allow", "GET, POST");
    sendJson(response, 405, { error: "Method Not Allowed" });
  } catch (error) {
    sendJson(response, 500, { error: error.message });
  }
};
