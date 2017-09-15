import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { OrdercheckComponent } from './ordercheck.component';
import { InputComponent } from './pages/input/input.component';
import { RecapComponent } from './pages/recap/recap.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { ErrorComponent } from './pages/error/error.component';

import { OrderCheckService } from './ordercheck.services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'ordercheck',
                component: OrdercheckComponent
            }
        ])
    ],
    declarations: [
        OrdercheckComponent,
        InputComponent,
        RecapComponent,
        ConfirmComponent,
        ErrorComponent
    ],
    providers: [OrderCheckService]
})
export class OrdercheckModule { }
