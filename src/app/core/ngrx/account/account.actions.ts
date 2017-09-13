import { Action, createSelector } from '@ngrx/store';

import { IAppState, IAppData } from '../IAppState';
import { IAccount } from './IAccount';

export const selectAccounts = (state: IAppState) => state.account;
export const selectAccountsOk = createSelector(selectAccounts, (state: IAppData) => state.data);
export const selectAccountsErr = createSelector(selectAccounts, (state: IAppData) => state.error);

export const selectAccountById = (selectedId) => {
    return createSelector(
        selectAccountsOk,
        (entities) => !entities ? null : entities.find((item) => item.id === selectedId)
    );
};

export const ACCOUNT_LOAD = 'ACCOUNT_LOAD';
export const ACCOUNT_LOAD_OK = 'ACCOUNT_LOAD_OK';
export const ACCOUNT_LOAD_ERR = 'ACCOUNT_LOAD_ERR';
export const ACCOUNT_LOAD_DETAILS = 'ACCOUNT_LOAD_DETAILS';
export const ACCOUNT_LOAD_DETAILS_OK = 'ACCOUNT_LOAD_DETAILS_OK';
export const ACCOUNT_LOAD_DETAILS_ERR = 'ACCOUNT_LOAD_DETAILS_ERR';

export class LoadAccount implements Action {
    public readonly type = ACCOUNT_LOAD;

    constructor(public onCompleteActions?: Action[]) { }
}

export class LoadAccountOk implements Action {
    public readonly type = ACCOUNT_LOAD_OK;

    constructor(public payload: IAccount[]) { }
}

export class LoadAccountErr implements Action {
    public readonly type = ACCOUNT_LOAD_ERR;

    constructor(public payload: any) { }
}

export class AccountDetails implements Action {
    public readonly type = ACCOUNT_LOAD_DETAILS;

    constructor(public payload: any) { }
}

export class AccountDetailsOk implements Action {
    public readonly type = ACCOUNT_LOAD_DETAILS_OK;

    constructor(public payload: any) { }
}

export class AccountDetailsErr implements Action {
    public readonly type = ACCOUNT_LOAD_DETAILS_ERR;

    constructor(public payload: any) { }
}

export type AccountAction =
    | LoadAccount
    | LoadAccountOk
    | LoadAccountErr
    | AccountDetails
    | AccountDetailsOk
    | AccountDetailsErr;
