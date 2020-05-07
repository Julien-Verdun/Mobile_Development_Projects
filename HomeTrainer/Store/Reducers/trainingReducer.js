import { removeElt } from "./../../src/utils/functions.js";

const initialState = { myTrainings: [] };

function toggleTraining(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "TOGGLE_NEW_TRAINING":
      // ajout de l'id a l'entrainement
      newTraining = action.value;
      nextState = {
        ...state,
        myTrainings: state.myTrainings.concat([newTraining]),
      };

      return nextState || state;

    case "TOGGLE_REMOVE_TRAINING":
      let nextTraining = removeElt(state.myTrainings, action.value);
      nextState = {
        ...state,
        myTrainings: nextTraining,
      };
      return nextState || state;

    case "RESET_TRAINING":
      nextState = {
        ...state,
        myTrainings: initialState.myTrainings,
      };
      return nextState || state;

    default:
      return state;
  }
}

export default toggleTraining;
