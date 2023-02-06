import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { profileReducer } from "./profileReducer";
import { dialogReducer, dialogsReducer } from "./dialogReducer";
import { feedListReducer } from "./feedReducer";
import { searchReducer } from "./searchReducer";
import { rightbarReducer } from "./rightbarReducer";
// import { navPathReducer } from "./navPathReducer";
import { alertReducer } from "./alertReducer";
// import { dboardReducer } from "./dboardReducer";

const reducers = combineReducers({
  user: userReducer,
  profile: profileReducer,
  dialogs: dialogsReducer,
  // itemDetail: itemDetailReducer,
  feedList: feedListReducer,
  search: searchReducer,
  rightbar: rightbarReducer,
  // contactDetail: contactDetailReducer,
  // navPath: navPathReducer,
  alert: alertReducer,
  // dboard: dboardReducer
});

export default reducers;
