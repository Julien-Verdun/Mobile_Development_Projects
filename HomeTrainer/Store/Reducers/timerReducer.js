const initialState = {
  intervalTime: {},
  amrapTime: {},
};

/*
faire un reducer pour avoir la liste des temps pour un exo données, puis l'utiliser pour afficher un graphique
*/

function toggleTime(state = initialState, action) {
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
      return nextState || state;
    case "TOGGLE_AMRAP_TIME":
      nextState = {
        ...state,
        amrapTime: {
          totalTime: action.value.amrapTime.totalTime,
        },
      };
      return nextState || state;

    default:
      return state;
  }
}

export default toggleTime;
