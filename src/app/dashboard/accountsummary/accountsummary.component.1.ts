import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../core/ngrx/IAppState';
import { ISubAppContent } from '../../core/ngrx/content/IContent';
import { IAccount } from '../../core/ngrx/account/IAccount';
import { LoadAccount } from '../../core/ngrx/account/account.actions';
import { LoadContent, UnLoadContent } from '../../core/ngrx/content/content.actions';

@Component({
    selector: 'app-accountsummary',
    templateUrl: './accountsummary.component.html',
    styleUrls: ['./accountsummary.component.scss']
})
export class AccountsummaryComponent implements OnInit, OnDestroy {
    accounts$: Observable<IAccount[]> = this.store$.select('account', 'data');
    error$ = this.store$.select('account', 'error');

    subappId = {
        moduleId: 'dashboard',
        appId: 'accountsummary'
    };

    content$: Observable<ISubAppContent> = this.store$.select('contents', 'dashboard_accountsummary', 'data');

    constructor(
        private store$: Store<IAppState>
    ) { }

    ngOnInit() {
        this.store$.dispatch(new LoadAccount());
        this.store$.dispatch(new LoadContent(this.subappId));
    }

    ngOnDestroy() {
        this.store$.dispatch(new UnLoadContent(this.subappId));
    }

}
