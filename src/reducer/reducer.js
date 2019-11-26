import {combineReducers} from "redux";
import {reducer as user} from "./user/user.js";
import {reducer as data} from "./data/data.js";
import {reducer as application} from "./application/application.js";

export default combineReducers({
  'DATA': data,
  'USER': user,
  'APPLICATION': application
});

