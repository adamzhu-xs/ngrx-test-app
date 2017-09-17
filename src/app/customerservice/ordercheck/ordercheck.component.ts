import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { OrderCheckService } from './ordercheck.services';

import { IAppState } from '../../portal/ngrx/IAppState';
import { ISubAppContent } from '../../portal/ngrx/content/IContent';
import { LoadContent, UnLoadContent } from '../../portal/ngrx/content/content.actions';

@Component({
    selector: 'app-ordercheck',
    templateUrl: './ordercheck.component.html',
    styleUrls: ['./ordercheck.component.scss']
})
export class OrdercheckComponent implements OnInit, OnDestroy {

    subappId = {
        moduleId: 'customerservice',
        appId: 'ordercheck'
    };

    currentPage = '';

    inputData: any;
    inputRes: any;
    inputError: any;

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

    inputAction($event) {
        this.inputData = $event;

        this.service.preProcess(this.inputData)
            .subscribe(res => {
                this.recapRes = res;
                this.currentPage = 'recap';
            }, err => {
                this.error = err;
                this.currentPage = 'error';
            });
    }

    recapAction() {
        this.service.orderCheck(this.inputData)
            .subscribe(res => {
                this.confirmRes = res;
                this.currentPage = 'confirm';
            }, err => {
                this.error = err;
                this.currentPage = 'error';
            });
    }

    confirmAction() {
        this.inputData = null;

        this.inputRes = null;
        this.recapRes = null;
        this.confirmRes = null;
        this.error = null;

        this.currentPage = 'input';
    }

}
