/*import { RouterModule, Routes } from '@angular/router';
import {AuthenticationComponent} from './core/authentication/authentication.component';
import {AuthenticatedGuard} from './core/authentication/shared/guards/authorizated.guard';
import {EmpresaComponent} from './empresa/empresa.component';

const appRoutes: Routes = [
    { path: 'empresa', component: EmpresaComponent, canActivate: [ AuthenticatedGuard ] },
    { path: 'login', component: AuthenticationComponent },
    { path: '', redirectTo: '/empresa', pathMatch: 'full' },
    { path: '**', redirectTo: '/empresa'}
];
export const Routing = RouterModule.forRoot(appRoutes);*/
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@app/core/auth/services/auth.service';
import {AuthGuardService} from "./core/auth/services/auth-guard.service";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'empresa',
                loadChildren: '@app/empresa/empresa.module#EmpresaModule',
                canActivate: [AuthGuardService]
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/login'
            },
            {
                path: '**',
                redirectTo: '/login'
            }
        ]),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
