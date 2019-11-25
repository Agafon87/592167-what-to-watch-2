import {combineReducers} from "redux";
import {reducer as user} from "./user/user";
import {reducer as data} from "./data/data";
import {reducer as application} from "./application/application";

export default combineReducers({
  'DATA': data,
  'USER': user,
  'APPLICATION': application
});

