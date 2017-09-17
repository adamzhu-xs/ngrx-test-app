import { Action } from '@ngrx/store';

import { IUser } from './IUser';
import {
    UserAction, USER_PROFILE_OK, USER_PROFILE_ERR
} from './user.actions';

const initialState: IUser = {
    authenticated: false,
    error: null
}

export function userReducer(state: IUser = initialState, action: UserAction): IUser {
    switch (action.type) {
        case USER_PROFILE_OK:
            return action.payload;

        case USER_PROFILE_ERR:
            return {
                authenticated: false,
                error: action.payload.err
            };

        default:
            return state;
    }
}
