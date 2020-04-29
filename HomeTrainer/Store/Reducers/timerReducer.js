import {
  getStoredIntervalTimer,
  getStoredAmrapTimer,
  replaceIntervalTimer,
  replaceAmrapTimer,
} from "../../DataStorage/timerStorage.js";

const initialState = {
  intervalTime: {
    trainingTime: 20,
    restTime: 10,
    totalTime: 240,
  },
  amrapTime: { totalTime: 360 },
};
getStoredIntervalTimer().then((storedTimer) => {
  initialState.intervalTime["trainingTime"] = storedTimer["trainingTime"];
  initialState.intervalTime["restTime"] = storedTimer["restTime"];
  initialState.intervalTime["totalTime"] = storedTimer["totalTime"];
});

getStoredAmrapTimer().then((storedTimer) => {
  initialState.amrapTime["totalTime"] = storedTimer["totalTime"];
});

/*
faire un reducer pour avoir la liste des temps pour un exo données, puis l'utiliser pour afficher un graphique
*/

function toggleTime(state = initialState, action) {
  console.log("toggleTime", action);
  let nextState;
  switch (action.type) {
    case "TOGGLE_INTERVAL_TIME":
      nextState = {
        ...state,
        intervalTime: {
          trainingTime: action.value.intervalTime.trainingTime,
          restTime: action.value.intervalTime.restTime,
          totalTime: action.value.intervalTime.totalTime,
        },
      };
      replaceIntervalTimer(
        action.value.intervalTime.trainingTime,
        action.value.intervalTime.restTime,
        action.value.intervalTime.totalTime
      );
      return nextState || state;
    case "TOGGLE_AMRAP_TIME":
      nextState = {
        ...state,
        amrapTime: {
          totalTime: action.value.amrapTime.totalTime,
        },
      };
      replaceAmrapTimer(action.value.amrapTime.totalTime);
      return nextState || state;

    default:
      return state;
  }
}

export default toggleTime;
