import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgrxModule } from './ngrx/ngrx.module';
import { SigninComponent } from './signin.component';
import { InputComponent } from './pages/input/input.component';

import { SigninService } from './signin.services';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgrxModule,
        RouterModule.forChild([{
            path: 'signin',
            component: SigninComponent
        }])
    ],
    declarations: [
        SigninComponent,
        InputComponent
    ],
    providers: [SigninService]
})
export class SigninModule { }
