import { Action } from '@ngrx/store';
import { IAppData } from '../../../core/ngrx/IAppState';
import { IAuthenticate, IUser } from '../../../core/ngrx/user/IUser';

export const USER_SIGNOUT = 'USER_SIGNOUT';
export const USER_SIGNOUT_OK = 'USER_SIGNOUT_OK';
export const USER_SIGNOUT_ERR = 'USER_SIGNOUT_ERR';

export class Signout implements Action {
    public readonly type = USER_SIGNOUT;

    constructor(public payload: any) { }
}

export class SignoutOk implements Action {
    public readonly type = USER_SIGNOUT_OK;

    constructor(public payload: any) { }
}

export class SignoutErr implements Action {
    public readonly type = USER_SIGNOUT_ERR;

    constructor(public payload: any) { }
}

export type SignoutAction =
    | Signout
    | SignoutOk
    | SignoutErr;
