import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../core/ngrx/IAppState';
import { ISubAppContent } from '../../core/ngrx/content/IContent';
import { LoadContent, UnLoadContent } from '../../core/ngrx/content/content.actions';
import { Signout } from './ngrx/signout.actions';
import { RefreshProfile } from '../../core/ngrx/user/user.actions';

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

    content: ISubAppContent;

    constructor(
        private store$: Store<IAppState>,
        private router: Router
    ) {
        this.store$.select('contents', 'auth_signout', 'data')
            .subscribe((data) => {
                this.content = data;
            });

        this.store$.select('auth_signout', 'data', 'sessionDuration')
            .subscribe((duration) => {
                if (!!duration) {
                    this.store$.dispatch(new RefreshProfile({}));
                }
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
        this.store$.dispatch(new Signout({
            userId: 'test'
        }));
    }

}
