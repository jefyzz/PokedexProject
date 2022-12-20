import { REHYDRATE } from "redux-persist/lib/constants";

export default function persistReducer(
  state = {},
  action
) {
  switch (action.type) {
    case REHYDRATE:
      return { ...state, persistedState: action.payload };
    default:
      return state;
  }
}
