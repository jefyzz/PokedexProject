export const GET_POKEMONS_FETCH_START = " GET_POKEMONS_FETCH_START";
export const GET_POKEMONS_FETCH_SUCCESS = "GET_POKEMONS_FETCH_SUCCESS";
// export const GET_POKEMONS_FETCH_FAILED = " GET_POKEMONS_FETCH_FAILED";

export const getPokemonsFetchStart = () => ({
  type: GET_POKEMONS_FETCH_START,
  payload: { isLoading: true },
});

export const getPokemonsFetchSuccess = (offset) => ({
  type: GET_POKEMONS_FETCH_SUCCESS,
  payload: { offset, isLoading: false },
});

