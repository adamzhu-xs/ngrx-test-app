import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { OrderstatementComponent } from './orderstatement.component';
import { InputComponent } from './pages/input/input.component';
import { RecapComponent } from './pages/recap/recap.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: 'orderstatement',
            component: OrderstatementComponent
        }])
    ],
    declarations: [
        OrderstatementComponent,
        InputComponent,
        RecapComponent,
        ConfirmComponent
    ]
})
export class OrderstatementModule { }
