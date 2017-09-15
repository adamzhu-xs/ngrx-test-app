import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class OrderCheckService {

    constructor(
        private http: Http
    ) { }

    getLandingConfig() {
        return this.http
            .get(`${environment.baseUrl}/api/customerservice/ordercheck`)
            .map((res: Response) => res.json());
    }

    preProcess(payload: any) {
        return this.http
            .post(`${environment.baseUrl}/api/customerservice/ordercheck/validate`, payload)
            .map((res: Response) => res.json());
    }

    orderCheck(payload: any) {
        return this.http
            .post(`${environment.baseUrl}/api/customerservice/ordercheck`, payload)
            .map((res: Response) => res.json());
    }

}
