import { getAllTraining } from "./../../training/Training.js";
import {
  getStoredTBestTime,
  replaceBestTime,
} from "./../../DataStorage/bestTimeStorage.js";

// bestTimes : liste

const initialState = { bestTimes: {} };
getStoredTBestTime().then((storedBestTime) => {
  getAllTraining().then((trainings) => {
    trainings.forEach((training) => {
      initialState.bestTimes[training.exerciseId] =
        storedBestTime[training.exerciseId];
    });
  });
});

/*
faire un reducer pour avoir la liste des temps pour un exo données, puis l'utiliser pour afficher un graphique
*/

function toggleBestTime(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "TOGGLE_NEW_BEST_TIME":
      nextState = {
        ...state,
        bestTimes: Object.assign({}, state.bestTimes),
      };
      nextState.bestTimes[action.value.exerciseId] = action.value.bestTime;
      replaceBestTime(action.value.exerciseId, action.value.bestTime);
      return nextState || state;

    default:
      return state;
  }
}

export default toggleBestTime;
