import { combineReducers } from "redux";
import userReducer from "./user/userReducer"
import pokemonsReducer from "./pokemons/pokemonsReducer";
import persistReducer from "./persistReducer";

const rootReducer = combineReducers({
  user: userReducer,
  pokemonsReducer,
  persistReducer,
});

export default rootReducer;
