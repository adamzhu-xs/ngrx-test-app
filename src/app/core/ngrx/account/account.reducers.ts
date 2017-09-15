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
            return {
                ...state,
                data: state.data.map(item => {
                    if (item.id === action.payload.id) {
                        const updated = Object.assign({}, item, action.payload);
                        updated.detailsRetrived = true;
                        return updated;
                    }

                    return item;
                })
            };

        case ACCOUNT_LOAD_DETAILS_ERR:
            return {
                ...state,
                data: state.data.map(item => {
                    if (item.id === action.payload.id) {
                        const updated = Object.assign({}, item);
                        updated.detailsError = action.payload;
                        return updated;
                    }

                    return item;
                })
            };

        default:
            return state;
    }
}
