import { getStoredUser, restoreUser } from "./../../DataStorage/userStorage.js";

const initialState = { user: [] };
//init list users registred

getStoredUser().then((storedUser) => {
  console.log("LOADED USER : ", storedUser);
  if (storedUser.length === 0) {
    initialState.user = {
      userId: "user1",
      userfirstname: "Julien",
      username: "Verdun",
      birthdate: "13/09/1997",
      login: "verdun.julien@yahoo.fr",
      password: "admin",
      imagePath: null,
    };
  } else {
    initialState.user = storedUser[0];
    // choisir ici le user qui correspond au login et au mot et passe
  }
  console.log("user : ", initialState.user);
});

function toggleUser(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "TOGGLE_NEW_USER":
      console.log(action, state.user);
      nextState = {
        ...state,
        user: action.value,
      };
      console.log("DONE TOGGLING USER");
      return nextState || state;

    case "TOGGLE_MODIFY_USER":
      console.log(action, state.user);
      nextState = {
        ...state,
        user: action.value,
      };
      restoreUser(action.value);
      console.log("DONE MODIFYING USER", nextState.user);
      return nextState || state;

    default:
      return state;
  }
}

export default toggleUser;
