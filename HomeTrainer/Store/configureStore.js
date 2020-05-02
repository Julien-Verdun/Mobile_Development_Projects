import { createStore, combineReducers } from "redux";
import toggleBestTime from "./Reducers/bestTimeReducer.js";
import toggleTime from "./Reducers/timerReducer.js";
import toggleTraining from "./Reducers/trainingReducer.js";
import toggleUser from "./Reducers/userReducer.js";

const rootReducer = combineReducers({
  bestTimes: toggleBestTime,
  timer: toggleTime,
  myTrainings: toggleTraining,
  user: toggleUser,
});

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
