
export interface ISubAppId {
    moduleId: string;
    appId: string;
}

export interface ISubAppContent {
    locale: string;
    subappId: ISubAppId;
    data: any;
}

export interface IContent {
    currentLocale: string;

    auth_signin?: ISubAppContent,
    auth_signout?: ISubAppContent,
    auth_register?: ISubAppContent,

    dashboard_accountsummary?: ISubAppContent,
    dashboard_accountdetails?: ISubAppContent,

    customerservice_ordercheck?: ISubAppContent,
    customerservice_orderstatement?: ISubAppContent
}
