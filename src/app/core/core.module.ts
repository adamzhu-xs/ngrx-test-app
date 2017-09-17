import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CanActivateViaAuthGuard } from './guards/CanActivateViaAuthGuard';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [],
    providers: [CanActivateViaAuthGuard]
})
export class CoreModule { }
