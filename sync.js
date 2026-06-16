(function () {
  const APP_NAME = "huroof-realtime";

  function hasFirebaseConfig(config) {
    return Boolean(
      config
      && config.apiKey
      && config.databaseURL
      && config.projectId
      && !String(config.apiKey).includes("YOUR_")
    );
  }

  function getFirebaseApp(config) {
    if (!hasFirebaseConfig(config) || !window.firebase?.initializeApp || !window.firebase?.database) {
      return null;
    }

    return window.firebase.apps.find((app) => app.name === APP_NAME)
      || window.firebase.initializeApp(config, APP_NAME);
  }

  function createFallbackSync({ fallbackPublish, fallbackSubscribe, fallbackPublishBuzz, fallbackSubscribeBuzz }) {
    return {
      mode: "fallback",
      publish: fallbackPublish || (() => {}),
      subscribe: fallbackSubscribe || (() => () => {}),
      publishBuzz: fallbackPublishBuzz || (() => Promise.resolve(false)),
      subscribeBuzz: fallbackSubscribeBuzz || (() => () => {}),
    };
  }

  function createRoomSync(options) {
    const {
      roomCode,
      onState,
      onBuzz,
      fallbackPublish,
      fallbackSubscribe,
      fallbackPublishBuzz,
      fallbackSubscribeBuzz,
    } = options || {};

    const fallback = createFallbackSync({
      fallbackPublish,
      fallbackSubscribe,
      fallbackPublishBuzz,
      fallbackSubscribeBuzz,
    });

    if (!roomCode) {
      return fallback;
    }

    let app;
    try {
      app = getFirebaseApp(window.HUROOF_FIREBASE_CONFIG);
    } catch {
      return fallback;
    }

    if (!app) {
      return fallback;
    }

    const database = window.firebase.database(app);
    const stateRef = database.ref(`rooms/${roomCode}/state`);
    const buzzRef = database.ref(`rooms/${roomCode}/buzz`);

    return {
      mode: "firebase",
      publish(payload) {
        const nextState = {
          ...payload,
          updatedAt: window.firebase.database.ServerValue.TIMESTAMP,
        };

        return stateRef.set(nextState)
          .then(() => {
            if (payload.phase !== "open") {
              return buzzRef.remove();
            }
            return null;
          })
          .catch(() => {
            fallback.publish(payload);
          });
      },
      subscribe() {
        if (typeof onState !== "function") {
          return () => {};
        }

        let fallbackUnsubscribe = null;
        const handler = (snapshot) => {
          const value = snapshot.val();
          if (value) {
            onState(value);
          }
        };
        const handleError = () => {
          if (!fallbackUnsubscribe) {
            fallbackUnsubscribe = fallback.subscribe(onState);
          }
        };

        stateRef.on("value", handler, handleError);
        return () => {
          stateRef.off("value", handler);
          if (fallbackUnsubscribe) {
            fallbackUnsubscribe();
          }
        };
      },
      publishBuzz(payload) {
        const team = payload?.team;
        const selectedIndex = payload?.selectedIndex;

        if (team !== "red" && team !== "green") {
          return Promise.resolve(false);
        }

        const nextBuzz = {
          type: "buzz",
          team,
          room: roomCode,
          selectedIndex,
          at: window.firebase.database.ServerValue.TIMESTAMP,
        };

        return buzzRef.transaction((current) => {
          if (current && current.selectedIndex === selectedIndex) {
            return;
          }

          return nextBuzz;
        }).then((result) => result.committed).catch(() => fallback.publishBuzz(payload));
      },
      subscribeBuzz(callback = onBuzz) {
        if (typeof callback !== "function") {
          return () => {};
        }

        let fallbackUnsubscribe = null;
        const handler = (snapshot) => {
          const value = snapshot.val();
          if (value) {
            callback(value);
          }
        };
        const handleError = () => {
          if (!fallbackUnsubscribe) {
            fallbackUnsubscribe = fallback.subscribeBuzz(callback);
          }
        };

        buzzRef.on("value", handler, handleError);
        return () => {
          buzzRef.off("value", handler);
          if (fallbackUnsubscribe) {
            fallbackUnsubscribe();
          }
        };
      },
    };
  }

  window.HuroofSync = {
    createRoomSync,
    hasFirebaseConfig,
  };
})();
