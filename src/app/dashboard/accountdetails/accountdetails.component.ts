import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../portal/ngrx/IAppState';
import { ISubAppContent } from '../../portal/ngrx/content/IContent';
import { LoadContent, UnLoadContent } from '../../portal/ngrx/content/content.actions';

import { AccountDetailsService } from './accountdetails.services';

@Component({
    selector: 'app-accountdetails',
    templateUrl: './accountdetails.component.html',
    styleUrls: ['./accountdetails.component.scss']
})
export class AccountdetailsComponent implements OnInit, OnDestroy {

    subappId = {
        moduleId: 'dashboard',
        appId: 'accountdetails'
    };

    content$: Observable<ISubAppContent> = this.store$.select('contents', 'dashboard_accountdetails', 'data');

    id: string;

    account: any;
    accountError: any;

    transactions: any;
    transactionsError: any;

    constructor(
        private route: ActivatedRoute,
        private store$: Store<IAppState>,
        private service: AccountDetailsService
    ) {

    }

    ngOnInit() {
        this.store$.dispatch(new LoadContent(this.subappId));

        this.route.params.subscribe(params => {
            this.id = params['id'];

            this.service.getDetails(this.id)
                .subscribe(res => {
                    this.account = res;
                }, err => {
                    this.accountError = err;
                });

            this.service.getTranactions(this.id, '', '')
                .subscribe(res => {
                    this.transactions = res.transactions;
                }, err => {
                    this.transactionsError = err;
                });
        });
    }

    ngOnDestroy() {
        this.store$.dispatch(new UnLoadContent(this.subappId));
    }

}
