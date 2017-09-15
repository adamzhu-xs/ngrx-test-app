import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../core/ngrx/IAppState';
import { ISubAppContent } from '../../core/ngrx/content/IContent';
import { LoadContent, UnLoadContent } from '../../core/ngrx/content/content.actions';

@Component({
    selector: 'app-orderstatement',
    templateUrl: './orderstatement.component.html',
    styleUrls: ['./orderstatement.component.scss']
})
export class OrderstatementComponent implements OnInit {

    subappId = {
        moduleId: 'customerservice',
        appId: 'orderstatement'
    };

    showInput = true;
    showRecap = false;
    showConfirm = false;

    content$: Observable<ISubAppContent> = this.store$.select('contents', 'customerservice_orderstatement', 'data');

    constructor(
        private store$: Store<IAppState>
    ) { }

    ngOnInit() {
        this.store$.dispatch(new LoadContent(this.subappId));
    }

    ngOnDestroy() {
        this.store$.dispatch(new UnLoadContent(this.subappId));
    }

}
