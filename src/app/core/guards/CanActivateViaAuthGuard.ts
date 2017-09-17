import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { IAppState } from '../../core/ngrx/IAppState';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    authenticated$: Observable<any> = this.store$.select('user', 'authenticated');

    constructor(
        private store$: Store<IAppState>,
        private router: Router
    ) { }

    canActivate() {
        return this.authenticated$.map(flag => {
            if (flag) {
                return true;
            } else {
                this.router.navigate(['/auth/signin']);
            }
        }).catch(() => {
            this.router.navigate(['/auth/signin']);
            return Observable.of(false);
        });
    }

}
