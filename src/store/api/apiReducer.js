import {
  GET_POKEMONS_FETCH_SUCCESS,
  GET_POKEMONS_FETCH_START,
} from "./apiAction";

const apiReducer = (state = { pokemons: [] }, action) => {
  switch (action.type) {
    case GET_POKEMONS_FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POKEMONS_FETCH_SUCCESS:
      if (!action.payload.results) return state;
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload.results],
        nextFetch: action.payload.next,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default apiReducer;
