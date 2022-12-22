import { all } from 'redux-saga/effects';
import pokemonsSagas from './pokemons/pokemonsSaga';

function* rootSaga() {
  yield all([...pokemonsSagas]);
}

export default rootSaga;
