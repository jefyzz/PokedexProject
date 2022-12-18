import { takeEvery, call, put } from "redux-saga/effects";
import { GET_POKEMONS_FETCH, GET_POKEMONS_SUCCESS } from "./apiAction";

const pokemonsFetch = async () => {
  const apiCall = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then(
    (response) => response.json()
  );
  return apiCall;
};

function* workGetPokemonsFetch() {
  const pokemons = yield call(pokemonsFetch);
  yield put({ type: GET_POKEMONS_SUCCESS, pokemons });
}

export function* apiSaga() {
  yield takeEvery(GET_POKEMONS_FETCH, workGetPokemonsFetch);
}
