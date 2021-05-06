import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// reducers
import menuReducer from "./menuReducer";
import modalReducer from "./modalReducer";
import authReducer from "./authReducer";
import UserdropDownMenuReducer from "./UserdropDownMenuReducer";
import cartMenuReducer from "./cartMenuReducer";
import cartReducer from "./cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  menu: menuReducer,
  modal: modalReducer,
  authentication: authReducer,
  dropDownMenu: UserdropDownMenuReducer,
  cartMenu: cartMenuReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
