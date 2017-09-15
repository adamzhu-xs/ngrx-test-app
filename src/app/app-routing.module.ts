import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { CanActivateViaAuthGuard } from './core/guards/CanActivateViaAuthGuard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/signin',
        pathMatch: 'full'
    }, {
        path: 'auth',
        loadChildren: 'app/auth/auth.module#AuthModule'
    },
    {
        path: 'app',
        canActivate: [CanActivateViaAuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'customerservice',
                loadChildren: 'app/customerservice/customerservice.module#CustomerServiceModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
