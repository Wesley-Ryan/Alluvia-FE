import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { userReducer } from "./userReducer";
export const rootReducer = combineReducers({
  loginReducer,
  userReducer,
});
