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
    ACCOUNT_LOAD, ACCOUNT_LOAD_OK, ACCOUNT_LOAD_ERR,
    ACCOUNT_LOAD_DETAILS, ACCOUNT_LOAD_DETAILS_OK, ACCOUNT_LOAD_DETAILS_ERR
} from './account.actions';

@Injectable()
export class AccountEffects {

    @Effect() login$: Observable<Action> = this.actions$.ofType(ACCOUNT_LOAD)
        // Map the payload into JSON to use as the request body
        .map(toPayload)
        .mergeMap(payload =>
            this.http.get(environment.baseUrl + '/api/accounts')
                // If successful, dispatch success action with result
                .map(data => ({ type: ACCOUNT_LOAD_OK, payload: data.json().accounts }))
                // If request fails, dispatch failed action
                .catch(() => of({ type: ACCOUNT_LOAD_ERR, payload: { code: 'ERR' } }))
        );

    constructor(
        private http: Http,
        private actions$: Actions
    ) {

    }
}
