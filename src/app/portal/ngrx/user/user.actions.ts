import { Action } from '@ngrx/store';
import { IAppData } from '../IAppState';
import { IAuthenticate, IUser } from './IUser';

export const USER_PROFILE = 'USER_PROFILE';
export const USER_PROFILE_OK = 'USER_PROFILE_OK';
export const USER_PROFILE_ERR = 'USER_PROFILE_ERR';

export class RefreshProfile implements Action {
    public readonly type = USER_PROFILE;

    constructor(public payload: any) { }
}

export class RefreshProfileOk implements Action {
    public readonly type = USER_PROFILE_OK;

    constructor(public payload: IUser) { }
}

export class RefreshProfileErr implements Action {
    public readonly type = USER_PROFILE_ERR;

    constructor(public payload: any) { }
}

export type UserAction =
    | RefreshProfile
    | RefreshProfileOk
    | RefreshProfileErr;
