import {
  GET_POKEMONS_NAMES_FETCH_STATUS,
  GET_POKEMONS_NAMES_FETCH_SUCCESS,
  GET_POKEMONS_DETAILS_FETCH_STATUS,
  GET_POKEMONS_DETAILS_FETCH_SUCCESS,
} from "./pokemonsAction";

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
        details: { ...state.details, [action.payload.name]: action.payload },
        isDetailsLoading: false,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;

// id: action.payload.id,
// image: action.payload.sprites.other["official-artwork"].front_default,
// height: action.payload.height,
// weight: action.payload.weight,
// types: action.payload.types[0].type.name,
// stats: [...state.stats, ...action.payload.stats],
// name: action.payload.name,
