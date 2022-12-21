import { takeLatest, call, put, select } from "redux-saga/effects";
import {
  GET_POKEMONS_NAMES_FETCH_START,
  GET_POKEMONS_NAMES_FETCH_SUCCESS,
  GET_POKEMONS_NAMES_FETCH_STATUS,
  GET_POKEMONS_DETAILS_FETCH_START,
  GET_POKEMONS_DETAILS_FETCH_SUCCESS,
  GET_POKEMONS_DETAILS_FETCH_STATUS,
} from "./pokemonsAction";

const pokemonsNameFetch = async (action) => {
  const apiCall = await fetch(
    action.payload.url || "https://pokeapi.co/api/v2/pokemon?limit=12"
  ).then((response) => response.json());
  return apiCall;
};

const pokemonDetailsFetch = async (pokemonName) => {
  const apiCall = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  ).then((response) => response.json());
  const { id, sprites, height, weight, types, stats, name } = apiCall;
  const image = sprites.other["official-artwork"].front_default;
  const details = { id, name, image, height, weight, types, stats };
  return details;
};

function* workGetPokemonsNamesFetch() {
  try {
    const pokemonsPagination = yield select(
      (state) => state.pokemonsReducer.nextFetch
    );
    // if (isNamesLoading) return; // Prevent overlapping requests by skipping the ones sent when loading.
    yield put({
      type: GET_POKEMONS_NAMES_FETCH_STATUS,
      payload: { isNamesLoading: true },
    });
    const callPokemonsPagination = yield call(pokemonsNameFetch, {
      payload: { url: pokemonsPagination },
    });

    yield put({
      type: GET_POKEMONS_NAMES_FETCH_SUCCESS,
      payload: callPokemonsPagination,
    });
  } catch (e) {
    console.log("Name error", e);
    yield put({
      type: GET_POKEMONS_NAMES_FETCH_STATUS,
      payload: { isNamesLoading: false },
    });
  }
}

function* workGetPokemonsDetailsFetch(action) {
  try {
    yield put({
      type: GET_POKEMONS_DETAILS_FETCH_STATUS,
      payload: { isDetailsLoading: true },
    });

    const callPokemonName = yield call(
      pokemonDetailsFetch,
      action.payload.name
    );

    yield put({
      type: GET_POKEMONS_DETAILS_FETCH_SUCCESS,
      payload: callPokemonName,
    });
  } catch (e) {
    console.log("Details error", e);
    yield put({
      type: GET_POKEMONS_DETAILS_FETCH_STATUS,
      payload: { isDetailsLoading: false },
    });
  }
}

function* watchPokemonsNames() {
  yield takeLatest(GET_POKEMONS_NAMES_FETCH_START, workGetPokemonsNamesFetch);
}
function* watchPokemonsDetails() {
  yield takeLatest(
    GET_POKEMONS_DETAILS_FETCH_START,
    workGetPokemonsDetailsFetch
  );
}

export const pokemonsSagas = [watchPokemonsNames(), watchPokemonsDetails()];
