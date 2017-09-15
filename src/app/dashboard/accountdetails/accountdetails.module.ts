import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AccountdetailsComponent } from './accountdetails.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: 'accountdetails/:id', component: AccountdetailsComponent
        }])
    ],
    declarations: [AccountdetailsComponent]
})
export class AccountdetailsModule { }
