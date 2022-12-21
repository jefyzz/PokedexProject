import { all } from "redux-saga/effects";
import { pokemonsSagas } from "./pokemons/pokemonsSaga";

export function* rootSaga() {
  yield all([...pokemonsSagas]);
}
