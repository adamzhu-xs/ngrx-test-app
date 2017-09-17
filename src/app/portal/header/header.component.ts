import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IAppState } from '../../portal/ngrx/IAppState';
import { SwitchLocale } from '../../portal/ngrx/content/content.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    authenticated$: Observable<boolean> = this.store$.select('user', 'authenticated');
    currentLocale$: Observable<string> = this.store$.select('contents', 'currentLocale');

    constructor(
        private store$: Store<IAppState>,
        private router: Router
    ) { }

    ngOnInit() {
    }

    switchLocale(locale) {
        this.store$.dispatch(new SwitchLocale({
            locale
        }));
    }

}
