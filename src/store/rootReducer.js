import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import apiReducer from "./api/apiReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  apiReducer: apiReducer,
});
