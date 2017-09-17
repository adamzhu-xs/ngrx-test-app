import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        RouterModule
    ],
    exports: [HeaderComponent, FooterComponent],
    declarations: [HeaderComponent, FooterComponent]
})
export class PortalModule { }
