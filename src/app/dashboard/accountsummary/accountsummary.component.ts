import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../core/ngrx/IAppState';
import { IAccount } from '../../core/ngrx/account/IAccount';
import { LoadAccount } from '../../core/ngrx/account/account.actions';

@Component({
    selector: 'app-accountsummary',
    templateUrl: './accountsummary.component.html',
    styleUrls: ['./accountsummary.component.scss']
})
export class AccountsummaryComponent implements OnInit {
    accounts$: Observable<IAccount[]> = this.store$.select('account', 'data');
    error$ = this.store$.select('account', 'error');

    constructor(private store$: Store<IAppState>) { }

    ngOnInit() {
        this.store$.dispatch(new LoadAccount());
    }

}
