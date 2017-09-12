import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { ORDER_CHECK_LANDING, ORDER_CHECK_LANDING_OK, ORDER_CHECK_LANDING_ERR } from './ordercheck.reducers';

@Injectable()
export class OrderCheckEffects {

    @Effect() login$: Observable<Action> = this.actions$.ofType(ORDER_CHECK_LANDING)
        // Map the payload into JSON to use as the request body
        .map(toPayload)
        .mergeMap(payload =>
            this.http.post('/api/customerservice/ordercheck', payload)
                // If successful, dispatch success action with result
                .map(data => ({ type: ORDER_CHECK_LANDING_OK, payload: data }))
                // If request fails, dispatch failed action
                .catch(() => of({ type: ORDER_CHECK_LANDING_ERR }))
        );

    constructor(
        private http: Http,
        private actions$: Actions
    ) {

    }
}
