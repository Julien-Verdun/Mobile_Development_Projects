import { createStore } from "redux";
import toggleTime from "./Reducers/timerReducer.js";
import toggleTraining from "./Reducers/trainingReducer.js";
import toggleHistoric from "./Reducers/historicReducer.js";

import { persistCombineReducers } from "redux-persist";
import { AsyncStorage } from "react-native";
const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export default createStore(
  persistCombineReducers(rootPersistConfig, {
    timer: toggleTime,
    myTrainings: toggleTraining,
    historic: toggleHistoric,
  })
);
