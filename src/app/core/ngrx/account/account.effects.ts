import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/withLatestFrom';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { Store } from '@ngrx/store';

import { IAppState } from '../IAppState';
import { IAccount } from './IAccount';
import { LoadAccount } from './account.actions';
import { environment } from '../../../../environments/environment';

import {
    ACCOUNT_LOAD, ACCOUNT_LOAD_OK, ACCOUNT_LOAD_ERR,
    ACCOUNT_LOAD_DETAILS, ACCOUNT_LOAD_DETAILS_OK, ACCOUNT_LOAD_DETAILS_ERR
} from './account.actions';

@Injectable()
export class AccountEffects {

    @Effect() loadAccounts$: Observable<Action> = this.actions$
        .ofType(ACCOUNT_LOAD)
        .withLatestFrom(this.store$.select('account', 'data'), (action: any, accounts) => {
            if (!!accounts) {
                // skip the action if data already fetched
                return undefined;
            } else {
                return action;
            }
        })
        .filter((action) => !!action)
        .map(toPayload)
        .mergeMap(payload =>
            this.http.get(environment.baseUrl + '/api/accounts')
                .map(data => ({ type: ACCOUNT_LOAD_OK, payload: data.json().accounts }))
                .catch(() => of({ type: ACCOUNT_LOAD_ERR, payload: { code: 'ERR' } }))
        );

    @Effect() loadAccountDetails$: Observable<Action> = this.actions$
        .ofType(ACCOUNT_LOAD_DETAILS)
        .withLatestFrom(this.store$.select('account', 'data'), (action: any, accounts) => {
            if (!accounts) {
                // make sure we have account list first before fetch details
                this.store$.select('account', 'data')
                    .filter(account => !!account)
                    .first()
                    .subscribe(() => this.store$.dispatch(action));

                this.store$.dispatch(new LoadAccount());
                return undefined;
            } else {
                return action;
            }
        })
        .filter((action) => !!action)
        .map(toPayload)
        .mergeMap(payload =>
            this.http.get(environment.baseUrl + `/api/accounts/${payload.id}`)
                .map(data => ({ type: ACCOUNT_LOAD_DETAILS_OK, payload: data.json() }))
                .catch(() => of({ type: ACCOUNT_LOAD_DETAILS_ERR, payload: { code: 'ERR' } }))
        );

    constructor(
        private http: Http,
        private actions$: Actions,
        private store$: Store<IAppState>
    ) {

    }
}
