import {
  GET_POKEMONS_NAMES_FETCH_STATUS,
  GET_POKEMONS_NAMES_FETCH_SUCCESS,
  GET_POKEMONS_DETAILS_FETCH_STATUS,
  GET_POKEMONS_DETAILS_FETCH_SUCCESS,
} from './pokemonsAction';

const pokemonsReducer = (state = { pokemons: [], details: {} }, action) => {
  switch (action.type) {
    case GET_POKEMONS_NAMES_FETCH_STATUS:
      return {
        ...state,
        isNamesLoading: action.payload.isNamesLoading,
      };
    case GET_POKEMONS_NAMES_FETCH_SUCCESS:
      if (!action.payload.results) return state;
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload.results],
        nextFetch: action.payload.next,
        isNamesLoading: false,
      };
    case GET_POKEMONS_DETAILS_FETCH_STATUS:
      return {
        ...state,
        isDetailsLoading: action.payload.isDetailsLoading,
      };

    case GET_POKEMONS_DETAILS_FETCH_SUCCESS:
      if (!action.payload) return state;
      return {
        ...state,
        details: { ...state.details, [action.payload.id]: action.payload },
        isDetailsLoading: false,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;

