import { all, call } from "redux-saga/effects";
import { apiSaga } from "./api/apiSaga";

export function* rootSaga() {
  yield* all(call(apiSaga));
}
