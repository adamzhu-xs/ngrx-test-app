import { Action } from '@ngrx/store';

import { IAppState, IAppData } from '../IAppState';
import {
    UserAction,
    USER_SIGNIN_OK, USER_SIGNIN_ERR, USER_SIGNOUT_OK, USER_SIGNOUT_ERR
} from './user.actions';

export function userReducer(state: IAppState, action: UserAction): IAppState {
    switch (action.type) {
        case USER_SIGNIN_OK:
            return {
                ...state,
                authenticated: true,
                user: {
                    data: action.payload.user
                }
            };

        case USER_SIGNIN_ERR:
            return {
                ...state,
                authenticated: false,
                user: {
                    data: null,
                    error: action.payload.err
                }
            };

        case USER_SIGNOUT_OK:
            return {
                ...state,
                authenticated: false,
                user: {
                    data: null,
                    error: null
                }
            };

        case USER_SIGNOUT_ERR:
            return {
                ...state,
                authenticated: true
            };

        default:
            return state;
    }
}
