import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { signoutReducer } from './signout.reducers';
import { SignoutEffects } from './signout.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('auth_signout', signoutReducer),
        EffectsModule.forFeature([SignoutEffects])
    ],
    declarations: []
})
export class NgrxModule { }
