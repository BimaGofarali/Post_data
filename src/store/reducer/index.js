import { combineReducers } from "redux";
import dataPersonal from "./personal";
import postData from "./postData";
export default combineReducers({
  dataPersonal,
  postData,
});
