const ROWS = 5;
const COLS = 5;
const ROOM_CODE_LENGTH = 6;

const board = document.getElementById("letter-board");
const dispRedScore = document.getElementById("disp-red-score");
const dispGreenScore = document.getElementById("disp-green-score");
const dispRedName = document.getElementById("disp-red-name");
const dispGreenName = document.getElementById("disp-green-name");
const dispPhase = document.getElementById("disp-phase");
const dispTimer = document.getElementById("disp-timer");
const roundMessage = document.getElementById("round-message");
const roundMessageLabel = document.getElementById("round-message-label");
const roundWinnerName = document.getElementById("round-winner-name");
const dispLetter = document.getElementById("disp-letter");
const dispSubject = document.getElementById("disp-subject");
const dispQuestionText = document.getElementById("disp-question-text");
const displayRoomForm = document.getElementById("display-room-form");
const displayRoomCodeInput = document.getElementById("display-room-code");
const displayRedBuzz = document.getElementById("display-red-buzz");
const displayGreenBuzz = document.getElementById("display-green-buzz");
const displayRedBuzzName = document.getElementById("display-red-buzz-name");
const displayGreenBuzzName = document.getElementById("display-green-buzz-name");
const displayBuzzStatus = document.getElementById("display-buzz-status");
const displayExitGame = document.getElementById("display-exit-game");
const displayApp = document.querySelector(".display-app");

let latestState = null;
let pendingBuzzTeam = null;
let prevPhase = null;
let prevWinner = null;
let prevMatchOver = false;
let displayAudioEnabled = true;

const audio = (() => {
  let ctx = null;

  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
  }

  // يُفتح السياق الصوتي من داخل حدث مستخدم مباشر
  function unlock() {
    if (!displayAudioEnabled) return;

    try {
      const ac = getCtx();
      if (ac.state !== "running") ac.resume().catch(() => {});
    } catch {}
  }

  // ينتظر حتى يصبح AudioContext جاهزاً قبل تشغيل الصوت
  function ready(fn) {
    if (!displayAudioEnabled) return;

    try {
      const ac = getCtx();
      const run = () => { try { fn(ac); } catch {} };
      if (ac.state === "running") run();
      else ac.resume().then(run).catch(() => {});
    } catch {}
  }

  function buzz(team) {
    ready((ac) => {
      const now = ac.currentTime;
      if (team === "red") {
        [[330, 0], [392, 0.08], [494, 0.16]].forEach(([freq, delay], index) => {
          const osc = ac.createOscillator();
          const g = ac.createGain();
          osc.connect(g); g.connect(ac.destination);
          osc.type = index === 2 ? "triangle" : "square";
          osc.frequency.value = freq;
          g.gain.setValueAtTime(0, now + delay);
          g.gain.linearRampToValueAtTime(index === 2 ? 0.24 : 0.2, now + delay + 0.012);
          g.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.42);
          osc.start(now + delay); osc.stop(now + delay + 0.46);
        });

        const pulse = ac.createOscillator();
        const pulseG = ac.createGain();
        pulse.connect(pulseG); pulseG.connect(ac.destination);
        pulse.type = "sine";
        pulse.frequency.setValueAtTime(130, now);
        pulse.frequency.exponentialRampToValueAtTime(82, now + 0.18);
        pulseG.gain.setValueAtTime(0, now);
        pulseG.gain.linearRampToValueAtTime(0.18, now + 0.01);
        pulseG.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
        pulse.start(now); pulse.stop(now + 0.26);
      } else {
        [[523, 0], [659, 0.07], [784, 0.14]].forEach(([freq, delay]) => {
          const osc = ac.createOscillator();
          const g = ac.createGain();
          osc.connect(g); g.connect(ac.destination);
          osc.type = "sine";
          osc.frequency.value = freq;
          g.gain.setValueAtTime(0, now + delay);
          g.gain.linearRampToValueAtTime(0.28, now + delay + 0.01);
          g.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.55);
          osc.start(now + delay); osc.stop(now + delay + 0.6);
        });
      }
    });
  }

  function roundWin() {
    ready((ac) => {
      const now = ac.currentTime;
      [[523, 0, 0.13], [659, 0.12, 0.13], [784, 0.24, 0.13], [1047, 0.37, 0.55]].forEach(([freq, delay, dur], i) => {
        const osc = ac.createOscillator();
        const g = ac.createGain();
        osc.connect(g); g.connect(ac.destination);
        osc.type = "triangle";
        osc.frequency.value = freq;
        g.gain.setValueAtTime(0, now + delay);
        g.gain.linearRampToValueAtTime(i === 3 ? 0.33 : 0.28, now + delay + 0.015);
        g.gain.exponentialRampToValueAtTime(0.001, now + delay + dur);
        osc.start(now + delay); osc.stop(now + delay + dur + 0.05);
      });
    });
  }

  function matchWin() {
    ready((ac) => {
      const now = ac.currentTime;
      [[392, 0, 0.09], [523, 0.09, 0.09], [659, 0.18, 0.09], [784, 0.27, 0.09]].forEach(([freq, delay, dur]) => {
        const osc = ac.createOscillator();
        const g = ac.createGain();
        osc.connect(g); g.connect(ac.destination);
        osc.type = "triangle";
        osc.frequency.value = freq;
        g.gain.setValueAtTime(0, now + delay);
        g.gain.linearRampToValueAtTime(0.3, now + delay + 0.015);
        g.gain.exponentialRampToValueAtTime(0.001, now + delay + dur);
        osc.start(now + delay); osc.stop(now + delay + dur + 0.05);
      });
      [[659, 0.42, 0.11], [784, 0.55, 0.11]].forEach(([freq, delay, dur]) => {
        const osc = ac.createOscillator();
        const g = ac.createGain();
        osc.connect(g); g.connect(ac.destination);
        osc.type = "triangle";
        osc.frequency.value = freq;
        g.gain.setValueAtTime(0, now + delay);
        g.gain.linearRampToValueAtTime(0.3, now + delay + 0.015);
        g.gain.exponentialRampToValueAtTime(0.001, now + delay + dur);
        osc.start(now + delay); osc.stop(now + delay + dur + 0.05);
      });
      [[523, 0.20], [659, 0.20], [784, 0.22], [1047, 0.32]].forEach(([freq, vol]) => {
        const osc = ac.createOscillator();
        const g = ac.createGain();
        osc.connect(g); g.connect(ac.destination);
        osc.type = freq > 900 ? "triangle" : "sine";
        osc.frequency.value = freq;
        g.gain.setValueAtTime(0, now + 0.68);
        g.gain.linearRampToValueAtTime(vol, now + 0.70);
        g.gain.setValueAtTime(vol, now + 1.1);
        g.gain.exponentialRampToValueAtTime(0.001, now + 1.85);
        osc.start(now + 0.68); osc.stop(now + 1.9);
      });
      const boom = ac.createOscillator();
      const boomG = ac.createGain();
      boom.connect(boomG); boomG.connect(ac.destination);
      boom.type = "sine";
      boom.frequency.setValueAtTime(90, now + 0.68);
      boom.frequency.exponentialRampToValueAtTime(35, now + 1.0);
      boomG.gain.setValueAtTime(0, now + 0.68);
      boomG.gain.linearRampToValueAtTime(0.45, now + 0.70);
      boomG.gain.exponentialRampToValueAtTime(0.001, now + 1.0);
      boom.start(now + 0.68); boom.stop(now + 1.05);
    });
  }

  return { buzz, roundWin, matchWin, unlock };
})();

function normalizeRoomCode(value) {
  return String(value || "")
    .trim()
    .replace(/\D/g, "")
    .slice(0, ROOM_CODE_LENGTH);
}

function isCompleteRoomCode(value) {
  return normalizeRoomCode(value).length === ROOM_CODE_LENGTH;
}

function normalizeContestantTeam(value) {
  return value === "red" || value === "green" ? value : "";
}

function setupRoomCode() {
  const params = new URLSearchParams(location.search);
  const hashParams = new URLSearchParams(location.hash.replace(/^#/, ""));
  let code = normalizeRoomCode(params.get("room") || hashParams.get("room"));

  if (!isCompleteRoomCode(code)) {
    const storedCode = normalizeRoomCode(localStorage.getItem("huroof-room"));
    code = isCompleteRoomCode(storedCode) ? storedCode : "";
  }

  if (code) {
    params.set("room", code);
    history.replaceState(null, "", `${location.pathname}?${params.toString()}#room=${code}`);
    localStorage.setItem("huroof-room", code);
  }

  return code;
}

const roomCode = setupRoomCode();
const roomQuery = encodeURIComponent(roomCode);

function setupContestantTeam() {
  const params = new URLSearchParams(location.search);
  const team = normalizeContestantTeam(params.get("role"));

  if (team) {
    params.set("role", team);
    history.replaceState(null, "", `${location.pathname}?${params.toString()}${location.hash}`);
    displayApp?.classList.add(`contestant-${team}`);
    displayApp?.setAttribute("data-contestant-team", team);
  }

  return team;
}

const contestantTeam = setupContestantTeam();
displayAudioEnabled = !contestantTeam;

function withRoom(path) {
  if (!roomCode) {
    return path;
  }

  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}room=${roomQuery}`;
}

function setupRoomEntryControls() {
  if (!displayRoomCodeInput) {
    return;
  }

  if (roomCode) {
    displayRoomCodeInput.value = roomCode;
  }

  displayRoomCodeInput.addEventListener("input", () => {
    const normalized = normalizeRoomCode(displayRoomCodeInput.value);
    if (displayRoomCodeInput.value !== normalized) {
      displayRoomCodeInput.value = normalized;
    }
  });

  displayRoomForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const nextRoomCode = normalizeRoomCode(displayRoomCodeInput.value);
    if (!isCompleteRoomCode(nextRoomCode)) {
      displayRoomCodeInput.focus();
      return;
    }

    localStorage.setItem("huroof-room", nextRoomCode);
    const nextUrl = new URL(location.href);
    nextUrl.searchParams.set("room", nextRoomCode);
    location.assign(nextUrl.toString());
  });
}

function exitCurrentGame() {
  window.location.replace(withRoom("index.html"));
}

function closeApp() {
  navigator.app?.exitApp?.();
  window.open("", "_self");
  window.close();
  globalThis.close?.();

  window.setTimeout(() => {
    if (!document.hidden) {
      history.go(-99);
    }
  }, 80);
}

setupRoomEntryControls();

const usesLocalServerEvents = location.protocol === "http:"
  && (
    location.hostname === "localhost"
    || location.hostname === "127.0.0.1"
    || /^\d+\.\d+\.\d+\.\d+$/.test(location.hostname)
  );

function subscribeFallbackState(onState) {
  if (!roomCode) {
    return () => {};
  }

  if (usesLocalServerEvents) {
    const eventSource = new EventSource(withRoom("/events"));
    eventSource.addEventListener("message", (event) => {
      try {
        onState(JSON.parse(event.data));
      } catch {
        // تجاهل رسالة حالة غير مكتملة.
      }
    });

    return () => eventSource.close();
  }

  const fetchState = () => {
    fetch(withRoom("/state"))
      .then((response) => response.ok ? response.json() : null)
      .then((data) => {
        if (data?.cells) {
          onState(data);
        }
      })
      .catch(() => {});
  };

  fetchState();
  const intervalId = window.setInterval(fetchState, 500);
  return () => window.clearInterval(intervalId);
}

// BroadcastChannel: fallback for same-device tabs
const channel = globalThis.BroadcastChannel
  ? new BroadcastChannel(`حروف-game-${roomCode}`)
  : { postMessage() {}, addEventListener() {} };
channel.addEventListener("message", (event) => {
  if (event.data?.type === "final-exit") {
    closeApp();
    return;
  }

  if (event.data?.type === "request-state") return;
  if (event.data?.type) return;
  render(event.data);
});

function publishFallbackBuzz(payload) {
  channel.postMessage({ type: "buzz", ...payload, room: roomCode });

  if (!roomCode) {
    return Promise.resolve(false);
  }

  return fetch(withRoom("/buzz"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ team: payload.team }),
  }).then((response) => response.ok).catch(() => true);
}

const roomSync = window.HuroofSync?.createRoomSync?.({
  roomCode,
  onState: render,
  fallbackSubscribe: subscribeFallbackState,
  fallbackPublishBuzz: publishFallbackBuzz,
}) || {
  mode: "fallback",
  subscribe: () => subscribeFallbackState(render),
  publishBuzz: publishFallbackBuzz,
};

if (roomCode) {
  roomSync.subscribe();
  channel.postMessage({ type: "request-state" });
}

function buildBoard(cells) {
  board.replaceChildren();

  const makeFrameCell = (team) => {
    const cell = document.createElement("div");
    cell.className = `frame-cell frame-cell-${team}`;
    cell.setAttribute("aria-hidden", "true");
    return cell;
  };

  const makeRedColumn = () => {
    const column = document.createElement("div");
    column.className = "hex-column hex-column-red";
    column.setAttribute("aria-hidden", "true");
    for (let row = 0; row < ROWS + 1; row++) {
      column.append(makeFrameCell("red"));
    }
    return column;
  };

  board.append(makeRedColumn());

  for (let colIndex = 0; colIndex < COLS; colIndex++) {
    const column = document.createElement("div");
    column.className = `hex-column hex-column-play ${colIndex % 2 === 1 ? "is-offset" : ""}`;
    column.setAttribute("role", "group");
    column.setAttribute("aria-label", `عمود ${colIndex + 1}`);

    column.append(makeFrameCell("green"));
    cells
      .filter((c) => c.col === colIndex)
      .sort((a, b) => a.row - b.row)
      .forEach((cell) => {
        const el = document.createElement("div");
        el.className = "letter-cell";
        el.dataset.index = String(cell.index);
        el.setAttribute("role", "gridcell");
        el.setAttribute("aria-label", `حرف ${cell.letter}`);
        el.textContent = cell.letter;
        column.append(el);
      });

    column.append(makeFrameCell("green"));
    board.append(column);
  }

  board.append(makeRedColumn());
}

function render(data) {
  if (!Array.isArray(data?.cells)) {
    return;
  }

  if (data.room && data.room !== roomCode) {
    return;
  }

  const {
    cells, selectedIndex, winner, winningPath, matchOver, phase, timedOut,
    currentRound, totalRounds, roundWins, teams, seconds, currentTeam,
  } = data;

  if (latestState?.selectedIndex !== selectedIndex || phase !== "open") {
    pendingBuzzTeam = null;
  }

  if ((phase === "first" || phase === "second") && phase !== prevPhase) {
    audio.buzz(currentTeam);
  }
  prevPhase = phase;

  const justMatchOver = matchOver && !prevMatchOver;
  if (justMatchOver) {
    audio.matchWin();
  } else if (winner && winner !== prevWinner) {
    audio.roundWin();
  }
  prevWinner = winner;
  prevMatchOver = matchOver;

  latestState = data;

  if (board.querySelectorAll(".letter-cell").length !== cells.length) {
    buildBoard(cells);
  }

  const path = new Set(winningPath);
  board.querySelectorAll(".letter-cell").forEach((el) => {
    const index = Number(el.dataset.index);
    const cell = cells[index];
    el.textContent = cell.letter;
    el.setAttribute("aria-label", `حرف ${cell.letter}`);
    el.classList.toggle("is-selected", selectedIndex === index);
    el.classList.toggle("is-red", cell.owner === "red");
    el.classList.toggle("is-green", cell.owner === "green");
    el.classList.toggle("is-path", path.has(index));
  });

  dispRedScore.textContent = roundWins.red;
  dispGreenScore.textContent = roundWins.green;
  dispRedName.textContent = teams.red.name;
  dispGreenName.textContent = teams.green.name;
  let phaseText;
  if (matchOver) {
    phaseText = "انتهت المباراة";
  } else if (winner) {
    phaseText = "اكتمل الخط";
  } else if (timedOut) {
    phaseText = "انتهى الوقت";
  } else {
    const map = {
      idle: "",
      open: "الإجابة أولًا",
      first: `دور ${teams[currentTeam]?.name || ""}`,
      second: `دور ${teams[currentTeam]?.name || ""}`,
      resolved: "تم الاحتساب",
      finished: "انتهت الجولة",
    };
    phaseText = map[phase] ?? "";
  }
  if (dispPhase) {
    dispPhase.textContent = phaseText;
    dispPhase.hidden = !phaseText;
  }

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  dispTimer.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  dispTimer.classList.toggle("is-low", seconds <= 5 && seconds > 0);

  roundMessage.hidden = !winner && !matchOver;
  if (winner || matchOver) {
    roundMessage.classList.toggle("is-red", winner === "red");
    roundMessage.classList.toggle("is-green", winner === "green");

    if (matchOver) {
      roundMessageLabel.textContent = "انتهت المباراة";
      if (roundWins.red > roundWins.green) {
        roundWinnerName.textContent = `${teams.red.name} فاز بالمباراة`;
      } else if (roundWins.green > roundWins.red) {
        roundWinnerName.textContent = `${teams.green.name} فاز بالمباراة`;
      } else {
        roundWinnerName.textContent = "تعادل في المباراة";
      }
    } else {
      roundMessageLabel.textContent = "اكتمل الخط";
      roundWinnerName.textContent = `${teams[winner].name} كسب الجولة`;
    }
  }

  const selectedCell = selectedIndex !== null ? cells[selectedIndex] : null;

  if (dispLetter) dispLetter.textContent = (selectedCell && !winner && !matchOver) ? selectedCell.letter : "؟";

  updateBuzzControls(data);
}

function canRequestBuzz(data) {
  return data?.phase === "open"
    && data.selectedIndex !== null
    && !data.timedOut
    && !data.winner
    && !data.matchOver;
}

function getTeamName(teams, team) {
  return teams?.[team]?.name || (team === "red" ? "الأحمر" : "الأخضر");
}

function updateBuzzControls(data) {
  if (!displayRedBuzz || !displayGreenBuzz) {
    return;
  }

  const canBuzz = canRequestBuzz(data);
  const waitingForRequest = Boolean(pendingBuzzTeam) && canBuzz;
  const activePhase = data.phase === "first" || data.phase === "second";
  const canRedBuzz = !contestantTeam || contestantTeam === "red";
  const canGreenBuzz = !contestantTeam || contestantTeam === "green";

  const isPublicDisplay = !contestantTeam;
  const showingActive = isPublicDisplay && activePhase;

  displayRedBuzz.hidden = showingActive ? data.currentTeam !== "red" : contestantTeam === "green";
  displayGreenBuzz.hidden = showingActive ? data.currentTeam !== "green" : contestantTeam === "red";

  displayRedBuzz.disabled = !canRedBuzz || !canBuzz || waitingForRequest;
  displayGreenBuzz.disabled = !canGreenBuzz || !canBuzz || waitingForRequest;
  displayRedBuzz.classList.toggle("is-active", activePhase && data.currentTeam === "red");
  displayGreenBuzz.classList.toggle("is-active", activePhase && data.currentTeam === "green");
  displayRedBuzz.classList.toggle("is-public-active", showingActive && data.currentTeam === "red");
  displayGreenBuzz.classList.toggle("is-public-active", showingActive && data.currentTeam === "green");
  displayRedBuzzName.textContent = getTeamName(data.teams, "red");
  displayGreenBuzzName.textContent = getTeamName(data.teams, "green");

  const redSpan = displayRedBuzz.querySelector("span");
  const greenSpan = displayGreenBuzz.querySelector("span");
  if (isPublicDisplay) {
    if (redSpan) redSpan.textContent = showingActive && data.currentTeam === "red" ? "الإجابة عندك" : "طلب الإجابة";
    if (greenSpan) greenSpan.textContent = showingActive && data.currentTeam === "green" ? "الإجابة عندك" : "طلب الإجابة";
  }

  const buzzButtonsGrid = displayRedBuzz.closest(".contestant-buzz-buttons");
  if (buzzButtonsGrid) {
    buzzButtonsGrid.classList.toggle("is-single", showingActive);
  }
}

function requestBuzz(team) {
  if (contestantTeam && team !== contestantTeam) {
    return;
  }

  if (!canRequestBuzz(latestState)) {
    return;
  }

  pendingBuzzTeam = team;
  updateBuzzControls(latestState);

  const payload = {
    team,
    selectedIndex: latestState.selectedIndex,
  };

  Promise.resolve(roomSync.publishBuzz(payload))
    .then((accepted) => {
      if (accepted === false && pendingBuzzTeam === team && canRequestBuzz(latestState)) {
        pendingBuzzTeam = null;
        updateBuzzControls(latestState);
      }
    })
    .catch(() => {
      if (pendingBuzzTeam === team && canRequestBuzz(latestState)) {
        pendingBuzzTeam = null;
        updateBuzzControls(latestState);
      }
    });
}

displayRedBuzz?.addEventListener("click", () => { audio.unlock(); requestBuzz("red"); });
displayGreenBuzz?.addEventListener("click", () => { audio.unlock(); requestBuzz("green"); });
displayExitGame?.addEventListener("click", exitCurrentGame);

// تفعيل السياق الصوتي عند أول تفاعل مع الصفحة (للشاشات التي لا يُضغط فيها على أزرار)
const _unlockOnce = () => {
  audio.unlock();
  document.removeEventListener("click", _unlockOnce, true);
  document.removeEventListener("touchstart", _unlockOnce, true);
  document.removeEventListener("keydown", _unlockOnce, true);
};
document.addEventListener("click", _unlockOnce, true);
document.addEventListener("touchstart", _unlockOnce, true);
document.addEventListener("keydown", _unlockOnce, true);
