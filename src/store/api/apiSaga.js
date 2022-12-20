import { takeLatest, call, put, select, takeEvery } from "redux-saga/effects";
import {
  GET_POKEMONS_FETCH_START,
  GET_POKEMONS_FETCH_SUCCESS,
} from "./apiAction";

const pokemonsFetch = async (action) => {
  const apiCall = await fetch(
    action.payload.url || "https://pokeapi.co/api/v2/pokemon?limit=12"
  ).then((response) => response.json());
  // console.log(action.payload.url)
  return apiCall;
};

function* workGetPokemonsFetch() {
  const pokemonsPagination = yield select(
    (state) => state.apiReducer.nextFetch
  );
  const callPokemonsPagination = yield call(pokemonsFetch, {
    payload: { url: pokemonsPagination },
  });
  yield put({
    type: GET_POKEMONS_FETCH_SUCCESS,
    payload: callPokemonsPagination,
  });
}

export function* apiSaga() {
  yield takeLatest(GET_POKEMONS_FETCH_START, workGetPokemonsFetch);
}
