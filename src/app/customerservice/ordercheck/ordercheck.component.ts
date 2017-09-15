import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { OrderCheckService } from './ordercheck.services';

import { IAppState } from '../../core/ngrx/IAppState';
import { ISubAppContent } from '../../core/ngrx/content/IContent';
import { LoadContent, UnLoadContent } from '../../core/ngrx/content/content.actions';

@Component({
    selector: 'app-ordercheck',
    templateUrl: './ordercheck.component.html',
    styleUrls: ['./ordercheck.component.scss']
})
export class OrdercheckComponent implements OnInit {

    subappId = {
        moduleId: 'customerservice',
        appId: 'ordercheck'
    };

    currentPage = '';

    inputRes: any;
    recapRes: any;
    confirmRes: any;
    error: any;

    content$: Observable<ISubAppContent> = this.store$.select('contents', 'customerservice_ordercheck', 'data');

    constructor(
        private store$: Store<IAppState>,
        private service: OrderCheckService
    ) { }

    ngOnInit() {
        this.store$.dispatch(new LoadContent(this.subappId));

        this.service.getLandingConfig()
            .subscribe(res => {
                this.inputRes = res;
                this.currentPage = 'input';
            }, err => {
                this.error = err;
                this.currentPage = 'error';
            });
    }

    ngOnDestroy() {
        this.store$.dispatch(new UnLoadContent(this.subappId));
    }

}
