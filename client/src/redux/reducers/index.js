import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import modalReducer from "./modalReducer";
import authReducer from "./authReducer";
import UserdropDownMenuReducer from "./UserdropDownMenuReducer";
import cartMenuReducer from "./cartMenuReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  modal: modalReducer,
  authentication: authReducer,
  dropDownMenu: UserdropDownMenuReducer,
  cartMenu: cartMenuReducer,
  cart: cartReducer,
});

export default rootReducer;
