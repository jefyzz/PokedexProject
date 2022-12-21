export const GET_POKEMONS_NAMES_FETCH_START = "GET_POKEMONS_NAMES_FETCH_START";
export const GET_POKEMONS_NAMES_FETCH_STATUS =
  "GET_POKEMONS_NAMES_FETCH_STATUS";
export const GET_POKEMONS_NAMES_FETCH_SUCCESS =
  "GET_POKEMONS_NAMES_FETCH_SUCCESS";
export const GET_POKEMONS_DETAILS_FETCH_START =
  "GET_POKEMONS_DETAILS_FETCH_START";
export const GET_POKEMONS_DETAILS_FETCH_STATUS =
  "GET_POKEMONS_DETAILS_FETCH_STATUS";
export const GET_POKEMONS_DETAILS_FETCH_SUCCESS =
  "GET_POKEMONS_DETAILS_FETCH_SUCCESS";

export const getPokemonsNamesFetchStart = () => ({
  type: GET_POKEMONS_NAMES_FETCH_START,
  payload: { isNamesLoading: true },
});

export const getPokemonsNamesFetchSuccess = () => ({
  type: GET_POKEMONS_NAMES_FETCH_SUCCESS,
  payload: { isNamesLoading: false },
});

export const getPokemonNamesFetchFailed = () => ({
  type: GET_POKEMONS_NAMES_FAILED,
  payload: { isNamesLoading: false },
});

export const getPokemonsDetailsFetchStart = (name) => ({
  type: GET_POKEMONS_DETAILS_FETCH_START,
  payload: { name, isDetailsLoading: true },
});

export const getPokemonsDetailsFetchSuccess = () => ({
  type: GET_POKEMONS_DETAILS_FETCH_SUCCESS,
  payload: { isDetailsLoading: false },
});

export const getPokemonDetailsFetchFailed = () => ({
  type: GET_POKEMONS_DETAILS_FAILED,
  payload: { isDetailsLoading: false },
});
