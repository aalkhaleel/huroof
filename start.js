const ROOM_CODE_LENGTH = 6;

const roomCodeLabel = document.querySelector("#room-code");
const links = {
  presenter: document.querySelector("#presenter-link"),
  red: document.querySelector("#red-link"),
  green: document.querySelector("#green-link"),
  public: document.querySelector("#public-link"),
};

const qrBtn = document.querySelector("#qr-btn");
const qrOverlay = document.querySelector("#qr-overlay");
const qrImg = document.querySelector("#qr-img");
const qrClose = document.querySelector("#qr-close");
const qrRoomNum = document.querySelector("#qr-room-num");

function normalizeRoomCode(value) {
  return String(value || "")
    .trim()
    .replace(/\D/g, "")
    .slice(0, ROOM_CODE_LENGTH);
}

function isCompleteRoomCode(value) {
  return normalizeRoomCode(value).length === ROOM_CODE_LENGTH;
}

function createRoomCode() {
  const values = new Uint32Array(ROOM_CODE_LENGTH);

  if (globalThis.crypto?.getRandomValues) {
    globalThis.crypto.getRandomValues(values);
  } else {
    values.forEach((_, index) => {
      values[index] = Math.floor(Math.random() * 10);
    });
  }

  return [...values].map((value) => String(value % 10)).join("");
}

function setupRoomCode() {
  const params = new URLSearchParams(location.search);
  let code = normalizeRoomCode(params.get("room"));

  if (!isCompleteRoomCode(code)) {
    const storedCode = normalizeRoomCode(localStorage.getItem("huroof-room"));
    code = isCompleteRoomCode(storedCode) ? storedCode : createRoomCode();
    params.set("room", code);
    history.replaceState(null, "", `${location.pathname}?${params.toString()}${location.hash}`);
  }

  localStorage.setItem("huroof-room", code);
  return code;
}

function withRoom(path, roomCode) {
  const url = new URL(path, location.href);
  url.searchParams.set("room", roomCode);
  return url.toString();
}

function setLinks(roomCode) {
  roomCodeLabel.textContent = roomCode;
  links.presenter.href = withRoom("presenter.html", roomCode);
  links.red.href = withRoom("display.html?role=red", roomCode);
  links.green.href = withRoom("display.html?role=green", roomCode);
  links.public.href = withRoom("display.html?role=display", roomCode);
}

function showQr(roomCode) {
  const appUrl = withRoom("index.html", roomCode);
  qrImg.src = "https://api.qrserver.com/v1/create-qr-code/"
    + "?size=440x440"
    + "&ecc=M"
    + "&data=" + encodeURIComponent(appUrl)
    + "&bgcolor=ffffff&color=000000&margin=3";
  qrRoomNum.textContent = roomCode;
  qrOverlay.hidden = false;
  qrClose.focus();
}

function hideQr() {
  qrOverlay.hidden = true;
  qrBtn.focus();
}

const roomCode = setupRoomCode();
setLinks(roomCode);

qrBtn?.addEventListener("click", () => showQr(roomCode));
qrClose?.addEventListener("click", hideQr);
qrOverlay?.addEventListener("click", (event) => {
  if (event.target === qrOverlay) {
    hideQr();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !qrOverlay.hidden) {
    hideQr();
  }
});
