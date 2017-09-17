import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/withLatestFrom';

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
    LoadContent, LoadContentOk, LoadContentErr, UnLoadContent, SwitchLocale,
    CONTENT_LOAD, CONTENT_LOAD_OK, CONTENT_LOAD_ERR,
    CONTENT_UN_LOAD, SWITCH_LOCALE
} from './content.actions';

@Injectable()
export class ContentEffects {

    @Effect() loadContent$: Observable<Action> = this.actions$.ofType(CONTENT_LOAD)
        .withLatestFrom(this.store$.select('contents', 'currentLocale'), (action: any, locale) => {
            action.payload.locale = locale;
            return action;
        })
        .map(toPayload)
        .mergeMap(payload => {
            const url = `/assets/${environment.business}/content/${payload.moduleId}/${payload.appId}_${payload.locale}.json`;
            return this.http.get(url, payload)
                .map(data => ({
                    type: CONTENT_LOAD_OK,
                    payload: {
                        data: data.json(),
                        subappId: payload
                    }
                }))
                .catch((err) => of(new LoadContentErr(err)));
        });

    @Effect() swidthLocale$: Observable<Action> = this.actions$.ofType(SWITCH_LOCALE)
        .withLatestFrom(this.store$.select('contents'), (action: any, contents) => {
            action.payload.contents = contents;
            return action;
        })
        .map(toPayload)
        .mergeMap(payload => {
            const actions = [];

            Object.values(payload.contents).forEach(item => {
                if (!item || !item.subappId) {
                    return;
                }

                actions.push(new LoadContent(item.subappId));
            });

            return actions;
        });

    constructor(
        private http: Http,
        private actions$: Actions,
        private store$: Store<IAppState>
    ) {

    }
}
