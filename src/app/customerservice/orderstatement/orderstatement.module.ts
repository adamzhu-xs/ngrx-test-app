import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../core/core.module';

import { OrderstatementComponent } from './orderstatement.component';
import { InputComponent } from './pages/input/input.component';
import { RecapComponent } from './pages/recap/recap.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';

import { OrderStatementService } from './orderstatement.services';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
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
    ],
    providers: [OrderStatementService]
})
export class OrderstatementModule { }
