import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import modalReducer from "./modalReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  modal: modalReducer,
  authentication: authReducer,
});

export default rootReducer;
