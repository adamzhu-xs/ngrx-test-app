import { Action } from '@ngrx/store';

export const ORDER_CHECK_LANDING = 'ORDER_CHECK_LANDING';
export const ORDER_CHECK_LANDING_OK = 'ORDER_CHECK_LANDING_OK';
export const ORDER_CHECK_LANDING_ERR = 'ORDER_CHECK_LANDING_ERR';
export const ORDER_CHECK_VALIDATE = 'ORDER_CHECK_VALIDATE';
export const ORDER_CHECK_VALIDATE_OK = 'ORDER_CHECK_VALIDATE_OK';
export const ORDER_CHECK_VALIDATE_ERR = 'ORDER_CHECK_VALIDATE_ERR';
export const ORDER_CHECK = 'ORDER_CHECK';
export const ORDER_CHECK_OK = 'ORDER_CHECK_OK';
export const ORDER_CHECK_ERR = 'ORDER_CHECK_ERR';

export function ordercheckReducer(state: number = 0, action: Action) {
    switch (action.type) {
        case ORDER_CHECK_LANDING:
            return state + 1;

        case ORDER_CHECK_VALIDATE:
            return state - 1;

        case ORDER_CHECK:
            return state - 1;

        default:
            return state;
    }
}
