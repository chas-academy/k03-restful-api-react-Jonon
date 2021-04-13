import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import modalReducer from "./modalReducer";
import authReducer from "./authReducer";
import UserdropDownMenuReducer from "./UserdropDownMenuReducer";
import cartMenuReducer from "./cartMenuReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  modal: modalReducer,
  authentication: authReducer,
  dropDownMenu: UserdropDownMenuReducer,
  cartMenu: cartMenuReducer,
});

export default rootReducer;
