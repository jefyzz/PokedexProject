import {
  // compose,
  createStore,
  applyMiddleware,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
// import logger from "redux-logger";
import { AsyncStorage } from "react-native";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "@redux-saga/core";

import { apiSaga } from "./api/apiSaga";

// AsyncStorage.clear()

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

// const middleWares = [logger, sagaMiddleware];

// const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(apiSaga);

export const persistor = persistStore(store);
