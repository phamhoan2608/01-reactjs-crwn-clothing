import { createAction } from '../../utils/reducer/reducer.utils';
import USER_ACTION from './user.types';

export const setCurrentUser = (user) => createAction(USER_ACTION.SET_CURRENT_USER, user);
