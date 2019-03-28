/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import registerReducer from "./registerReducer";
export default combineReducers({
  simpleReducer,
  registerReducer
});
