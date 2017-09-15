import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { OrdercheckModule } from './ordercheck/ordercheck.module';
import { OrderstatementModule } from './orderstatement/orderstatement.module';

@NgModule({
    imports: [
        CommonModule,
        OrdercheckModule,
        OrderstatementModule
    ],
    declarations: []
})
export class CustomerServiceModule { }
