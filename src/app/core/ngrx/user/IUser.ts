
import { IError } from '../IAppState';

export interface IAuthenticate {
    userId: string;
    password: string;
}

export interface IUser {
    authenticated: boolean;
    userId?: string;
    firstName?: string;
    lastName?: string;
    error?: IError;
}
