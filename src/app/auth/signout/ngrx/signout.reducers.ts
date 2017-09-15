import { Action } from '@ngrx/store';

import { IAppData } from '../../../core/ngrx/IAppState';
import { IAuthenticate } from '../../../core/ngrx/user/IUser';
import {
    SignoutAction, USER_SIGNOUT_OK, USER_SIGNOUT_ERR
} from './signout.actions';

const initialState: IAppData = {
    data: {
        authenticated: false
    },
    error: null
}

export function signoutReducer(state: IAppData = initialState, action: SignoutAction): IAppData {
    switch (action.type) {
        case USER_SIGNOUT_OK:
            return {
                ...state,
                data: action.payload,
                error: null
            };

        case USER_SIGNOUT_ERR:
            return {
                ...state,
                data: {
                    authenticated: false
                },
                error: action.payload
            };

        default:
            return state;
    }
}
