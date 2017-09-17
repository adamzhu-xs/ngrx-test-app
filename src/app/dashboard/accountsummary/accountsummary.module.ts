import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../core/core.module';

import { AccountsummaryComponent } from './accountsummary.component';
import { CategoryRowComponent } from './pages/category-row/category-row.component';
import { AccountRowComponent } from './pages/account-row/account-row.component';

import { AccountSummaryService } from './accountsummary.services';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
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
