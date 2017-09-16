import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class OrderStatementService {

    constructor(
        private http: Http
    ) { }

    getLandingConfig() {
        return this.http
            .get(`${environment.baseUrl}/api/customerservice/orderstatement`)
            .map((res: Response) => res.json());
    }

    preProcess(payload: any) {
        return this.http
            .post(`${environment.baseUrl}/api/customerservice/orderstatement/validate`, payload)
            .map((res: Response) => res.json());
    }

    orderStatement(payload: any) {
        return this.http
            .post(`${environment.baseUrl}/api/customerservice/orderstatement`, payload)
            .map((res: Response) => res.json());
    }

}
