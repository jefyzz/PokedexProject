import { GET_POKEMONS_SUCCESS } from "./apiAction";

const apiReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POKEMONS_SUCCESS:
      return { pokemons: action.pokemons };
    default:
      return state;
  }
};

export default apiReducer;
