import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../portal/ngrx/IAppState';
import { ISubAppContent } from '../../portal/ngrx/content/IContent';
import { LoadContent, UnLoadContent } from '../../portal/ngrx/content/content.actions';
import { RefreshProfile } from '../../portal/ngrx/user/user.actions';

import { SigninService } from './signin.services';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

    subappId = {
        moduleId: 'auth',
        appId: 'signin'
    };

    content$: Observable<ISubAppContent> = this.store$.select('contents', 'auth_signin', 'data');

    error: any;

    constructor(
        private store$: Store<IAppState>,
        private router: Router,
        private service: SigninService
    ) {
        this.store$.select('user', 'authenticated')
            .subscribe((authenticated) => {
                if (authenticated) {
                    this.router.navigate(['/app/dashboard/accountsummary']);
                }
            });
    }

    ngOnInit() {
        this.store$.dispatch(new LoadContent(this.subappId));
    }

    ngOnDestroy() {
        this.store$.dispatch(new UnLoadContent(this.subappId));
    }

    signin(user) {
        this.service.signin(user)
            .subscribe(res => {
                this.store$.dispatch(new RefreshProfile({}));
            }, err => {
                this.error = err;
            });
    }

}
