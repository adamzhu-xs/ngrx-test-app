import { Action } from '@ngrx/store';
import { ISubAppContent, ISubAppId } from './IContent';

export const CONTENT_LOAD = 'CONTENT_LOAD';
export const CONTENT_UN_LOAD = 'CONTENT_UN_LOAD';
export const CONTENT_LOAD_OK = 'CONTENT_LOAD_OK';
export const CONTENT_LOAD_ERR = 'CONTENT_LOAD_ERR';
export const SWITCH_LOCALE = 'SWITCH_LOCALE';

export class LoadContent implements Action {
    public readonly type = CONTENT_LOAD;

    constructor(public payload: ISubAppId) { }
}

export class UnLoadContent implements Action {
    public readonly type = CONTENT_UN_LOAD;

    constructor(public payload: ISubAppId) { }
}

export class LoadContentOk implements Action {
    public readonly type = CONTENT_LOAD_OK;

    constructor(public payload: ISubAppContent) { }
}

export class LoadContentErr implements Action {
    public readonly type = CONTENT_LOAD_ERR;

    constructor(public payload: any) { }
}

export class SwitchLocale implements Action {
    public readonly type = SWITCH_LOCALE;

    constructor(public payload: any) { }
}

export type ContentAction =
    | LoadContent
    | UnLoadContent
    | LoadContentOk
    | LoadContentErr
    | SwitchLocale;
