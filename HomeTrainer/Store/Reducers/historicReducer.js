import { getTraining } from "./../../training/Training.js";

const initialState = {
  historic: {},
};

getTraining().forEach((training) => {
  initialState.historic[training.exerciseId] = [];
});

function toggleHistoric(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "TOGGLE_ADD_TIME":
      nextState = {
        ...state,
        historic: Object.assign({}, state.historic),
      };
      nextState.historic[action.value.exerciseId].push(action.value.newTime);
      return nextState || state;
    case "TOGGLE_NEW_TRAINING_HISTORIC":
      nextState = {
        ...state,
        historic: Object.assign({}, state.historic),
      };
      nextState.historic[action.value] = [];
      return nextState || state;

    case "TOGGLE_REMOVE_TRAINING_HISTORIC":
      nextState = {
        ...state,
        historic: Object.assign({}, state.historic),
      };
      delete nextState.historic[action.value];
    case "RESET_HISTORIC":
      nextState = {
        ...state,
        historic: initialState.historic,
      };
      return nextState || state;

    default:
      return state;
  }
}

export default toggleHistoric;
