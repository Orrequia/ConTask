import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from './components';
import { MaterialModule } from '../material';

import { reducers } from './reducers';
import { EmpresaEffect } from './effects/empresa.effect';
import { EmpresaComponent } from './empresa.component';
import { AuthGuardService } from '@app/core/auth/services/auth-guard.service';
import {EmpresaService} from './services/empresa.service';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ComponentsModule,
        RouterModule.forChild([
            { path: '', component: EmpresaComponent, canActivate: [AuthGuardService] },
        ]),
        StoreModule.forFeature('empresa', reducers),
        EffectsModule.forFeature([EmpresaEffect]),
    ],
    providers: [
        EmpresaService
    ]
})
export class EmpresaModule {}
