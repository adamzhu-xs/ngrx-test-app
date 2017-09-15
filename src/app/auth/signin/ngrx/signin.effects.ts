import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { Store } from '@ngrx/store';

import { IAppState } from '../../../core/ngrx/IAppState';

import { environment } from '../../../../environments/environment';

import {
    SigninOk, SigninErr,
    USER_SIGNIN, USER_SIGNIN_OK, USER_SIGNIN_ERR
} from './signin.actions';

@Injectable()
export class SigninEffects {

    @Effect() signin$: Observable<Action> = this.actions$.ofType(USER_SIGNIN)
        .map(toPayload)
        .mergeMap(payload =>
            this.http.post(`${environment.baseUrl}/api/users/${payload.userId}/signin`, payload)
                .map(data => ({ type: USER_SIGNIN_OK, payload: data.json() }))
                .catch((err) => of(new SigninErr(err)))
        );

    constructor(
        private http: Http,
        private actions$: Actions,
        private store$: Store<IAppState>
    ) {

    }
}
