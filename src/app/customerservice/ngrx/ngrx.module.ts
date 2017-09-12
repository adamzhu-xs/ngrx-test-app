import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ordercheckReducer } from './ordercheck.reducers';
import { OrderCheckEffects } from './ordercheck.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('customerservice', {
            'ordercheck': ordercheckReducer
        }),
        EffectsModule.forFeature([OrderCheckEffects])
    ],
    declarations: []
})
export class NgrxModule { }
