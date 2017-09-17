import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { IAppState } from './IAppState';

import { contentReducer } from './content/content.reducers';
import { userReducer } from './user/user.reducers';

import { ContentEffects } from './content/content.effects';
import { UserEffects } from './user/user.effects';

import { environment } from '../../../environments/environment';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot({
            contents: contentReducer,
            user: userReducer
        }),
        EffectsModule.forRoot([
            ContentEffects,
            UserEffects
        ]),
        StoreRouterConnectingModule,
        !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : []
    ],
    declarations: []
})
export class NgrxModule { }
