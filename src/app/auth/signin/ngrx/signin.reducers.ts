import { Action } from '@ngrx/store';

import { IAppData } from '../../../core/ngrx/IAppState';
import { IAuthenticate } from '../../../core/ngrx/user/IUser';
import {
    SigninAction, USER_SIGNIN_OK, USER_SIGNIN_ERR, USER_SIGNIN_RESET
} from './signin.actions';

const initialState: IAppData = {
    data: {
        authenticated: false
    },
    error: null
}

export function signinReducer(state: IAppData = initialState, action: SigninAction): IAppData {
    switch (action.type) {
        case USER_SIGNIN_OK:
            return {
                ...state,
                data: {
                    ...action.payload,
                    authenticated: true
                },
                error: null
            };

        case USER_SIGNIN_ERR:
            return {
                ...state,
                data: {
                    authenticated: false,
                },
                error: action.payload.err
            };

        case USER_SIGNIN_RESET:
            return {};

        default:
            return state;
    }
}
