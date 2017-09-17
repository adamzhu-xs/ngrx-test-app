import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../../core/core.module';

import { SignoutComponent } from './signout.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';

import { SignoutService } from './signout.services';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        RouterModule.forChild([{
            path: 'signout',
            component: SignoutComponent
        }])
    ],
    declarations: [
        SignoutComponent,
        ConfirmComponent
    ],
    providers: [SignoutService]
})
export class SignoutModule { }
