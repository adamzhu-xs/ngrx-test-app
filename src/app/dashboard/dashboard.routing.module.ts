import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'dashboard',
            children: [
                { path: 'accountsummary', component: AccountsummaryComponent },
                { path: 'accountdetails/:id', component: AccountdetailsComponent }
            ]
        }
    ])],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}
