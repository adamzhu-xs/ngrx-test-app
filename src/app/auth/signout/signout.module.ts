import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgrxModule } from './ngrx/ngrx.module';
import { SignoutComponent } from './signout.component';

@NgModule({
    imports: [
        CommonModule,
        NgrxModule,
        RouterModule.forChild([{
            path: 'signout',
            component: SignoutComponent
        }])
    ],
    declarations: [SignoutComponent]
})
export class SignoutModule { }
