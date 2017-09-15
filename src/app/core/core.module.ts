import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxModule } from './ngrx/ngrx.module';

import { CanActivateViaAuthGuard } from './guards/CanActivateViaAuthGuard';

@NgModule({
    imports: [
        CommonModule,
        NgrxModule
    ],
    declarations: [],
    providers: [CanActivateViaAuthGuard]
})
export class CoreModule { }
