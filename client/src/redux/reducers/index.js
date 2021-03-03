import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import modalReducer from "./modalReducer";
import authReducer from "./authReducer";
import UserdropDownMenuReducer from "./UserdropDownMenuReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  modal: modalReducer,
  authentication: authReducer,
  dropDownMenu: UserdropDownMenuReducer,
});

export default rootReducer;
