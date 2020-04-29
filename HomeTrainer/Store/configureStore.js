import { createStore, combineReducers } from "redux";
import toggleBestTime from "./Reducers/bestTimeReducer.js";
import toggleTime from "./Reducers/timerReducer.js";

const rootReducer = combineReducers({
  bestTimes: toggleBestTime,
  timer: toggleTime,
});

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
