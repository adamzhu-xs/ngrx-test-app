import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdercheckComponent } from './ordercheck/ordercheck.component';
import { OrderstatementComponent } from './orderstatement/orderstatement.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'ordercheck',
                component: OrdercheckComponent
            },
            {
                path: 'orderstatement',
                component: OrderstatementComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class CustomerServiceRoutingModule {

}
