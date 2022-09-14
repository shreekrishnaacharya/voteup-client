import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { profileReducer } from "./profileReducer";
// import { menuReducer } from "./menuReducer";
import { feedListReducer } from "./feedReducer";
import { searchReducer } from "./searchReducer";
// import { contactDetailReducer, contactListReducer } from "./contactReducer";
// import { navPathReducer } from "./navPathReducer";
import { alertReducer } from "./alertReducer";
// import { dboardReducer } from "./dboardReducer";

const reducers = combineReducers({
    user: userReducer,
    profile: profileReducer,
    // menu: menuReducer,
    // itemDetail: itemDetailReducer,
    feedList: feedListReducer,
    search: searchReducer,
    // contactList: contactListReducer,
    // contactDetail: contactDetailReducer,
    // navPath: navPathReducer,
    alert: alertReducer,
    // dboard: dboardReducer
});

export default reducers;