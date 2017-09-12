import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { environment } from '../../../../environments/environment';

import {
    LoginOk, LoginErr, LogoutOk, LogoutErr,
    USER_SIGNIN, USER_SIGNIN_OK, USER_SIGNIN_ERR,
    USER_SIGNOUT, USER_SIGNOUT_OK, USER_SIGNOUT_ERR
} from './user.actions';

@Injectable()
export class UserEffects {

    @Effect() login$: Observable<Action> = this.actions$.ofType(USER_SIGNIN)
        // Map the payload into JSON to use as the request body
        .map(toPayload)
        .mergeMap(payload =>
            this.http.post(environment.baseUrl + '/api/user', payload)
                // If successful, dispatch success action with result
                .map(data => ({ type: USER_SIGNIN_OK, payload: data }))
                // If request fails, dispatch failed action
                .catch((err) => of(new LoginErr(err)))
        );

    constructor(
        private http: Http,
        private actions$: Actions
    ) {

    }
}
