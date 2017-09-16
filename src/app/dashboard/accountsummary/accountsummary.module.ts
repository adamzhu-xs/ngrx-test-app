import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AccountsummaryComponent } from './accountsummary.component';
import { CategoryRowComponent } from './pages/category-row/category-row.component';
import { AccountRowComponent } from './pages/account-row/account-row.component';

import { AccountSummaryService } from './accountsummary.services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: 'accountsummary', component: AccountsummaryComponent
        }])
    ],
    declarations: [
        AccountsummaryComponent,
        CategoryRowComponent,
        AccountRowComponent
    ],
    providers: [AccountSummaryService]
})
export class AccountsummaryModule { }
