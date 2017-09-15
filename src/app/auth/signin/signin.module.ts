import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgrxModule } from './ngrx/ngrx.module';
import { SigninComponent } from './signin.component';

@NgModule({
    imports: [
        CommonModule,
        NgrxModule,
        RouterModule.forChild([{
            path: 'signin',
            component: SigninComponent
        }])
    ],
    declarations: [SigninComponent]
})
export class SigninModule { }
