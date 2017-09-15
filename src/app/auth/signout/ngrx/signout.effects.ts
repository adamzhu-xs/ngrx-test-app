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
    SignoutOk, SignoutErr,
    USER_SIGNOUT, USER_SIGNOUT_OK, USER_SIGNOUT_ERR
} from './signout.actions';

@Injectable()
export class SignoutEffects {

    @Effect() signout$: Observable<Action> = this.actions$.ofType(USER_SIGNOUT)
        .withLatestFrom(this.store$.select('user', 'userId'), (action: any, userId) => {
            if (!userId) {
                // skip the action if not signed in
                return undefined;
            } else {
                action.payload.userId = userId;
                return action;
            }
        })
        .filter((action) => !!action)
        .map(toPayload)
        .mergeMap(payload =>
            this.http.post(`${environment.baseUrl}/api/users/${payload.userId}/signout`, payload)
                .map(data => ({ type: USER_SIGNOUT_OK, payload: data.json() }))
                .catch((err) => of(new SignoutErr(err)))
        );

    constructor(
        private http: Http,
        private actions$: Actions,
        private store$: Store<IAppState>
    ) {

    }
}
