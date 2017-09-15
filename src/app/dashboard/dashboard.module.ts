import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AccountsummaryModule } from './accountsummary/accountsummary.module';
import { AccountdetailsModule } from './accountdetails/accountdetails.module';

@NgModule({
    imports: [
        CommonModule,
        AccountsummaryModule,
        AccountdetailsModule
    ],
    declarations: [],
    providers: []
})
export class DashboardModule { }
