import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../portal/ngrx/IAppState';
import { ISubAppContent } from '../../portal/ngrx/content/IContent';
import { LoadContent, UnLoadContent } from '../../portal/ngrx/content/content.actions';

import { OrderStatementService } from './orderstatement.services';

@Component({
    selector: 'app-orderstatement',
    templateUrl: './orderstatement.component.html',
    styleUrls: ['./orderstatement.component.scss']
})
export class OrderstatementComponent implements OnInit, OnDestroy {

    subappId = {
        moduleId: 'customerservice',
        appId: 'orderstatement'
    };

    showInput = true;
    showRecap = false;
    showConfirm = false;

    content$: Observable<ISubAppContent> = this.store$.select('contents', 'customerservice_orderstatement', 'data');

    constructor(
        private store$: Store<IAppState>,
        private service: OrderStatementService
    ) { }

    ngOnInit() {
        this.store$.dispatch(new LoadContent(this.subappId));
    }

    ngOnDestroy() {
        this.store$.dispatch(new UnLoadContent(this.subappId));
    }

}
