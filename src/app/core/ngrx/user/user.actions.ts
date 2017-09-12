import { Action } from '@ngrx/store';
import { IAppData } from '../IAppState';
import { IAuthenticate, IUser } from './IUser';

export const USER_SIGNIN = 'USER_SIGNIN';
export const USER_SIGNIN_OK = 'USER_SIGNIN_OK';
export const USER_SIGNIN_ERR = 'USER_SIGNIN_ERR';
export const USER_SIGNOUT = 'USER_SIGNOUT';
export const USER_SIGNOUT_OK = 'USER_SIGNOUT_OK';
export const USER_SIGNOUT_ERR = 'USER_SIGNOUT_ERR';

export class Login implements Action {
    public readonly type = USER_SIGNIN;

    constructor(public payload: IAuthenticate) { }
}

export class LoginOk implements Action {
    public readonly type = USER_SIGNIN_OK;

    constructor(public payload: { user: IUser }) { }
}

export class LoginErr implements Action {
    public readonly type = USER_SIGNIN_ERR;

    constructor(public payload: any) { }
}

export class Logout implements Action {
    public readonly type = USER_SIGNOUT;
}

export class LogoutOk implements Action {
    public readonly type = USER_SIGNOUT_OK;

    constructor(public payload: any) { }
}

export class LogoutErr implements Action {
    public readonly type = USER_SIGNOUT_ERR;

    constructor(public payload: any) { }
}

export type UserAction =
    | Login
    | LoginOk
    | LoginErr
    | Logout
    | LogoutOk
    | LogoutErr;
