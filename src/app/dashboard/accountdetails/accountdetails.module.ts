import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AccountdetailsComponent } from './accountdetails.component';
import { DetailsPanelComponent } from './pages/details-panel/details-panel.component';
import { TransactionsPanelComponent } from './pages/transactions-panel/transactions-panel.component';

import { AccountDetailsService } from './accountdetails.services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: 'accountdetails/:id', component: AccountdetailsComponent
        }])
    ],
    declarations: [
        AccountdetailsComponent,
        DetailsPanelComponent,
        TransactionsPanelComponent
    ],
    providers: [AccountDetailsService]
})
export class AccountdetailsModule { }
