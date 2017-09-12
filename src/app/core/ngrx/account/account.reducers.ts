import { Action } from '@ngrx/store';

import { IAppState, IAppData } from '../IAppState';
import {
    AccountAction,
    ACCOUNT_LOAD, ACCOUNT_LOAD_OK, ACCOUNT_LOAD_ERR, ACCOUNT_LOAD_DETAILS_OK, ACCOUNT_LOAD_DETAILS_ERR
} from './account.actions';

export const initialState: IAppData = {
    meta: null,
    data: null,
    error: null
};

export function accountReducer(state = initialState, action: AccountAction): IAppData {
    switch (action.type) {
        case ACCOUNT_LOAD:
            return state;

        case ACCOUNT_LOAD_OK:
            return {
                ...state,
                data: action.payload
            };

        case ACCOUNT_LOAD_ERR:
            return {
                ...state,
                error: action.payload
            };

        case ACCOUNT_LOAD_DETAILS_OK:
            return state;

        case ACCOUNT_LOAD_DETAILS_ERR:
            return state;

        default:
            return state;
    }
}
