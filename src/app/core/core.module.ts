import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgrxModule } from './ngrx/ngrx.module';

import { CanActivateViaAuthGuard } from './guards/CanActivateViaAuthGuard';

@NgModule({
    imports: [
        CommonModule,
        NgrxModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        NgrxModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [],
    providers: [CanActivateViaAuthGuard]
})
export class CoreModule { }
