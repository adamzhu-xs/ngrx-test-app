
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
    data?: any;
    error?: IError;
}

export interface IAppState {
    authenticated: boolean;
    user?: IAppData;
    account?: IAppData;
    customerservice?: {
        ordercheck: IAppData
    };
}
