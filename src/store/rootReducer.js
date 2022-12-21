import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import pokemonsReducer from "./pokemons/pokemonsReducer";
import persistReducer from "./persistReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  pokemonsReducer,
  persistReducer,
});
