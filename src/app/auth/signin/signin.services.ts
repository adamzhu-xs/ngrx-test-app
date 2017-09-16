import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class SigninService {

    constructor(
        private http: Http
    ) { }

    signin(payload: any) {
        return this.http
            .post(`${environment.baseUrl}/api/users/${payload.userId}/signin`, payload)
            .map((res: Response) => res.json());
    }

}
