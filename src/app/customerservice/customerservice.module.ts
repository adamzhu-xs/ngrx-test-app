import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerServiceRoutingModule } from './customerservice.routing.module';

import { OrdercheckComponent } from './ordercheck/ordercheck.component';
import { OrderstatementComponent } from './orderstatement/orderstatement.component';

@NgModule({
    imports: [
        CommonModule,
        CustomerServiceRoutingModule
    ],
    declarations: [
        OrdercheckComponent,
        OrderstatementComponent
    ]
})
export class CustomerServiceModule {

}
