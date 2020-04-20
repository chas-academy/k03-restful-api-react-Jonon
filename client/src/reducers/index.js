import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  modal: modalReducer,
});

export default rootReducer;
