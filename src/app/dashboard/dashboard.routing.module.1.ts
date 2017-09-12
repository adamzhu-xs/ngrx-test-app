import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'accountsummary',
            component: AccountsummaryComponent
        },
        {
            path: 'accountdetails',
            component: AccountdetailsComponent
        }
    ])],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}
