
import { IContent, ISubAppContent } from './content/IContent';
import { IUser } from './user/IUser';

export interface IMeta {
    loadedTimestamp?: Date;
}

export interface IError {
    code: string;
    msg?: string;
    details?: any;
}

export interface IAppData {
    meta?: IMeta;
    content?: ISubAppContent;
    data?: any;
    error?: IError;
}

export interface IAppState {
    contents?: IContent;
    user?: IUser;
    account?: IAppData;

    auth_signin?: IAppData,
    auth_signout?: IAppData,

    customerservice_ordercheck?: IAppData,
    customerservice_orderstatement?: IAppData
}
