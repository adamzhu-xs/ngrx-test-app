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

import { IAppState } from '../IAppState';

import { environment } from '../../../../environments/environment';

import {
    RefreshProfileOk, RefreshProfileErr,
    USER_PROFILE, USER_PROFILE_OK, USER_PROFILE_ERR
} from './user.actions';

@Injectable()
export class UserEffects {

    @Effect() refreshProfile$: Observable<Action> = this.actions$.ofType(USER_PROFILE)
        .map(toPayload)
        .mergeMap(payload =>
            this.http.post(`${environment.baseUrl}/api/users/profile`, payload)
                .map(data => ({ type: USER_PROFILE_OK, payload: data.json() }))
                .catch((err) => of(new RefreshProfileErr(err)))
        );

    constructor(
        private http: Http,
        private actions$: Actions,
        private store$: Store<IAppState>
    ) {

    }
}
