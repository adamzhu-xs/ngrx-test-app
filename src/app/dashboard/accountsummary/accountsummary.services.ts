import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class AccountSummaryService {

    constructor(
        private http: Http
    ) { }

    getCategories() {
        return this.http
            .get(`${environment.baseUrl}/api/accounts?groupBy=category`)
            .map((res: Response) => res.json());
    }

    getAccounts(categoryType) {
        return this.http
            .get(`${environment.baseUrl}/api/accounts?category=${categoryType}`)
            .map((res: Response) => res.json());
    }

}
