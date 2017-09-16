import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class AccountDetailsService {

    constructor(
        private http: Http
    ) { }

    getDetails(accountId) {
        return this.http
            .get(environment.baseUrl + `/api/accounts/${accountId}`)
            .map((res: Response) => res.json());
    }

    getTranactions(accountId, fromDate, toDate) {
        return this.http
            .get(environment.baseUrl + `/api/accounts/${accountId}/transactions?fromDate=${fromDate}&toDate=${toDate}`)
            .map((res: Response) => res.json());
    }

}
