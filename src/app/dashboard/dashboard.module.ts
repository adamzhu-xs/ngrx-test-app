import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard.routing.module';

import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        AccountsummaryComponent,
        AccountdetailsComponent
    ],
    providers: []
})
export class DashboardModule {

}
