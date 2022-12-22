import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from '@redux-saga/core';

import { AsyncStorage } from 'react-native';
import rootReducer from './rootReducer';

import rootSaga from './rootSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'pokemonsReducer'], // agregar pokemons cuando termine
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(persistedReducer, undefined, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// compose,

// import logger from "redux-logger";

// AsyncStorage.clear()

// const middleWares = [logger, sagaMiddleware];

// const composedEnhancers = compose(applyMiddleware(...middleWares));
