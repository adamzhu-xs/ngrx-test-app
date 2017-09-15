import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { signinReducer } from './signin.reducers';
import { SigninEffects } from './signin.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('auth_signin', signinReducer),
        EffectsModule.forFeature([SigninEffects])
    ],
    declarations: []
})
export class NgrxModule { }
