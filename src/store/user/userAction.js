import { createAction } from '../../../utils/reducer';
import USER_ACTION_TYPES from './userTypes';

const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export default setCurrentUser;
