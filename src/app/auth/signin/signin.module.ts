import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../core/core.module';

import { SigninComponent } from './signin.component';
import { InputComponent } from './pages/input/input.component';

import { SigninService } from './signin.services';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
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
