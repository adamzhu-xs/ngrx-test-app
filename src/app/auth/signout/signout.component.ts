import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../portal/ngrx/IAppState';
import { ISubAppContent } from '../../portal/ngrx/content/IContent';
import { LoadContent, UnLoadContent } from '../../portal/ngrx/content/content.actions';
import { RefreshProfile } from '../../portal/ngrx/user/user.actions';

import { SignoutService } from './signout.services';

@Component({
    selector: 'app-signout',
    templateUrl: './signout.component.html',
    styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit, OnDestroy {

    subappId = {
        moduleId: 'auth',
        appId: 'signout'
    };

    content$: Observable<ISubAppContent> = this.store$.select('contents', 'auth_signout', 'data');

    data: any;
    error: any;

    userId: string;

    constructor(
        private store$: Store<IAppState>,
        private router: Router,
        private service: SignoutService
    ) {
        this.store$.select('user', 'userId')
            .subscribe((userId) => {
                this.userId = userId;
            });
    }

    ngOnInit() {
        this.store$.dispatch(new LoadContent(this.subappId));

        this.signout();
    }

    ngOnDestroy() {
        this.store$.dispatch(new UnLoadContent(this.subappId));
    }

    signout() {
        this.service.signout({
            userId: this.userId
        }).subscribe(res => {
            this.data = res;
            this.store$.dispatch(new RefreshProfile({}));
        }, err => {
            this.error = err;
        });
    }

}
