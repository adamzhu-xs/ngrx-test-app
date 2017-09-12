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

    @Effect() loadAccounts$: Observable<Action> = this.actions$
        .ofType(ACCOUNT_LOAD)
        .map(toPayload)
        .mergeMap(payload =>
            this.http.get(environment.baseUrl + '/api/accounts')
                .map(data => ({ type: ACCOUNT_LOAD_OK, payload: data.json().accounts }))
                .catch(() => of({ type: ACCOUNT_LOAD_ERR, payload: { code: 'ERR' } }))
        );

    @Effect() loadAccountDetails$: Observable<Action> = this.actions$
        .ofType(ACCOUNT_LOAD_DETAILS)
        .map(toPayload)
        .mergeMap(payload =>
            this.http.get(environment.baseUrl + `/api/accounts/${payload.id}`)
                .map(data => ({ type: ACCOUNT_LOAD_DETAILS_OK, payload: data.json() }))
                .catch(() => of({ type: ACCOUNT_LOAD_DETAILS_ERR, payload: { code: 'ERR' } }))
        );

    constructor(
        private http: Http,
        private actions$: Actions
    ) {

    }
}
