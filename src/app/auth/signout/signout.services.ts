import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class SignoutService {

    constructor(
        private http: Http
    ) { }

    signout(payload: any) {
        return this.http
            .post(`${environment.baseUrl}/api/users/${payload.userId}/signout`, payload)
            .map((res: Response) => res.json());
    }

}
