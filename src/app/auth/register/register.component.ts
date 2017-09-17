import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../portal/ngrx/IAppState';
import { ISubAppContent } from '../../portal/ngrx/content/IContent';
import { LoadContent, UnLoadContent } from '../../portal/ngrx/content/content.actions';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    subappId = {
        moduleId: 'auth',
        appId: 'register'
    };

    content$: Observable<ISubAppContent> = this.store$.select('contents', 'auth_register', 'data');

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
