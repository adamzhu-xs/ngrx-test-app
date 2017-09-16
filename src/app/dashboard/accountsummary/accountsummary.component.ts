import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../core/ngrx/IAppState';
import { ISubAppContent } from '../../core/ngrx/content/IContent';
import { IAccount } from '../../core/ngrx/account/IAccount';
import { LoadAccount } from '../../core/ngrx/account/account.actions';
import { LoadContent, UnLoadContent } from '../../core/ngrx/content/content.actions';

import { AccountSummaryService } from './accountsummary.services';

@Component({
    selector: 'app-accountsummary',
    templateUrl: './accountsummary.component.html',
    styleUrls: ['./accountsummary.component.scss']
})
export class AccountsummaryComponent implements OnInit, OnDestroy {

    subappId = {
        moduleId: 'dashboard',
        appId: 'accountsummary'
    };

    categories: any[];
    error: any;

    content$: Observable<ISubAppContent> = this.store$.select('contents', 'dashboard_accountsummary', 'data');

    constructor(
        private store$: Store<IAppState>,
        private service: AccountSummaryService
    ) { }

    ngOnInit() {
        this.store$.dispatch(new LoadContent(this.subappId));

        this.service.getCategories()
            .subscribe(res => {
                this.categories = res.categories;
            }, err => {
                this.error = err;
            });
    }

    ngOnDestroy() {
        this.store$.dispatch(new UnLoadContent(this.subappId));
    }

}
