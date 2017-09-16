import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgrxModule } from './ngrx/ngrx.module';
import { SigninComponent } from './signin.component';
import { InputComponent } from './pages/input/input.component';

@NgModule({
    imports: [
        CommonModule,
        NgrxModule,
        RouterModule.forChild([{
            path: 'signin',
            component: SigninComponent
        }])
    ],
    declarations: [SigninComponent, InputComponent]
})
export class SigninModule { }
