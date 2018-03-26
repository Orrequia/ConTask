import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
/**
 * Define app module routes here, e.g., to lazily load a module
 * (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
export const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/welcome' },
    { path: '/login', component: LoginComponent }
];
