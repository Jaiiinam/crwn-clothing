import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER, //wont change. constant
    payload: user
});