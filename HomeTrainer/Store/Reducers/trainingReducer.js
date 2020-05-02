import { getStoredTraining } from "./../../DataStorage/trainingStorage.js";
import { removeElt } from "./../../src/utils/functions.js";

const initialState = { myTrainings: [] };

getStoredTraining().then((storedTrainings) => {
  initialState.myTrainings = storedTrainings;
  console.log("myTrainings : ", storedTrainings);
});

function toggleTraining(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "TOGGLE_NEW_TRAINING":
      nextState = {
        ...state,
        myTrainings: state.myTrainings.concat([action.value]),
      };
      return nextState || state;

    case "TOGGLE_REMOVE_TRAINING":
      let nextTraining = removeElt(state.myTrainings, action.value);
      nextState = {
        ...state,
        myTrainings: nextTraining,
      };
      return nextState || state;

    default:
      return state;
  }
}

export default toggleTraining;
