import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import apiReducer from "./api/apiReducer";
import persistReducer from "./persistReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  apiReducer,
  persistReducer,
});
