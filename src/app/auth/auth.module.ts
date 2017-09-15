import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninModule } from './signin/signin.module';
import { SignoutModule } from './signout/signout.module';
import { RegisterModule } from './register/register.module';

@NgModule({
    imports: [
        CommonModule,
        SigninModule,
        SignoutModule,
        RegisterModule
    ],
    declarations: []
})
export class AuthModule { }
