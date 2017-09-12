import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxModule } from './ngrx/ngrx.module';

@NgModule({
    imports: [
        CommonModule,
        NgrxModule
    ],
    declarations: []
})
export class CoreModule { }
