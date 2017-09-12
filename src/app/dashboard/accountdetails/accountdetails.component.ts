import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../core/ngrx/IAppState';
import { IAccount } from '../../core/ngrx/account/IAccount';
import { AccountDetails, selectAccountById } from '../../core/ngrx/account/account.actions';

@Component({
    selector: 'app-accountdetails',
    templateUrl: './accountdetails.component.html',
    styleUrls: ['./accountdetails.component.scss']
})
export class AccountdetailsComponent implements OnInit {
    id: string;
    private sub: any;

    account$: Observable<IAccount>;
    detailsRetrived$: Observable<any>;
    detailsError$: Observable<any>;

    constructor(
        private route: ActivatedRoute,
        private store: Store<IAppState>
    ) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];

            const selector = selectAccountById(this.id);
            this.account$ = this.store.select(selector);

            const detailsRetrived = createSelector(selector, (acct: IAccount) => acct.detailsRetrived);
            this.detailsRetrived$ = this.store.select(detailsRetrived);

            const detailsError = createSelector(selector, (acct: IAccount) => acct.detailsError);
            this.detailsError$ = this.store.select(detailsError);

            this.store.dispatch(new AccountDetails({ id: this.id }));
        });
    }

}
