import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgrxModule } from './ngrx/ngrx.module';
import { SignoutComponent } from './signout.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';

@NgModule({
    imports: [
        CommonModule,
        NgrxModule,
        RouterModule.forChild([{
            path: 'signout',
            component: SignoutComponent
        }])
    ],
    declarations: [SignoutComponent, ConfirmComponent]
})
export class SignoutModule { }
