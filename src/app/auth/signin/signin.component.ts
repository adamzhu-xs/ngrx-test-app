import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../core/ngrx/IAppState';
import { ISubAppContent } from '../../core/ngrx/content/IContent';
import { LoadContent, UnLoadContent } from '../../core/ngrx/content/content.actions';
import { Signin, SigninReset } from './ngrx/signin.actions';
import { RefreshProfile } from '../../core/ngrx/user/user.actions';

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

    content: ISubAppContent;

    constructor(
        private store$: Store<IAppState>,
        private router: Router
    ) {
        this.store$.select('contents', 'auth_signin', 'data')
            .subscribe((data) => {
                this.content = data
            });

        this.store$.select('auth_signin', 'data', 'authenticated')
            .subscribe((flag) => {
                if (flag) {
                    this.store$.dispatch(new RefreshProfile({}));
                }
            });

        this.store$.select('user', 'authenticated')
            .subscribe((flag) => {
                if (flag) {
                    this.store$.dispatch(new SigninReset({}));
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

    signin() {
        this.store$.dispatch(new Signin({
            userId: 'test',
            password: 'test'
        }));
    }

}
