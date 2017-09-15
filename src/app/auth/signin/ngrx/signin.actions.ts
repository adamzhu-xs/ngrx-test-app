import { Action } from '@ngrx/store';

import { IAppData } from '../../../core/ngrx/IAppState';
import { IAuthenticate, IUser } from '../../../core/ngrx/user/IUser';

export const USER_SIGNIN = 'USER_SIGNIN';
export const USER_SIGNIN_OK = 'USER_SIGNIN_OK';
export const USER_SIGNIN_ERR = 'USER_SIGNIN_ERR';
export const USER_SIGNIN_RESET = 'USER_SIGNIN_RESET';

export class Signin implements Action {
    public readonly type = USER_SIGNIN;

    constructor(public payload: IAuthenticate) { }
}

export class SigninOk implements Action {
    public readonly type = USER_SIGNIN_OK;

    constructor(public payload: IUser) { }
}

export class SigninErr implements Action {
    public readonly type = USER_SIGNIN_ERR;

    constructor(public payload: any) { }
}

export class SigninReset implements Action {
    public readonly type = USER_SIGNIN_RESET;

    constructor(public payload: any) { }
}

export type SigninAction =
    | Signin
    | SigninOk
    | SigninErr
    | SigninReset;
