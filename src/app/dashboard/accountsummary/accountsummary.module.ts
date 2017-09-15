import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AccountsummaryComponent } from './accountsummary.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: 'accountsummary', component: AccountsummaryComponent
        }])
    ],
    declarations: [AccountsummaryComponent]
})
export class AccountsummaryModule { }
