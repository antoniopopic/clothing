import {UserActionTypes} from './user-types.js';

const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export default setCurrentUser;