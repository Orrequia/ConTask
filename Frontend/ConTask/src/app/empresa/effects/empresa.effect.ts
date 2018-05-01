import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of} from 'rxjs/index';
import { catchError, map, exhaustMap, tap } from 'rxjs/operators';
import {
    EmpresasActionTypes,
    LoadEmpresasSuccess,
    LoadEmpresasFail
} from '../actions/empresa.action';
import { EmpresaService } from '../services/empresa.service';

@Injectable()
export class EmpresaEffect {

    @Effect()
    loadCollection$: Observable<Action> = this.actions$.pipe(
        ofType(EmpresasActionTypes.LoadEmpresas),
        exhaustMap(() =>
            this.empresaService.getEmpresas()
                .pipe(
                    map(empresas => new LoadEmpresasSuccess(empresas),
                        catchError(error => of(new LoadEmpresasFail(error)))
                    )
                )
        )
    );

    constructor(
        private actions$: Actions,
        private empresaService: EmpresaService
    ) {}
}
