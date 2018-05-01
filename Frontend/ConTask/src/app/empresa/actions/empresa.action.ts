/*import { Action } from '@ngrx/store';
import { Empresa } from '../models/empresa.model';
import { createActionType } from '../../../state/shared/utils';

export const ADD_EMPRESA = createActionType('ADD_EMPRESA');
export const ADD_EMPRESA_SUCCESS = createActionType('ADD_EMPRESA_SUCCESS');
export const LOAD_EMPRESAS = createActionType('LOAD_EMPRESAS');
export const LOAD_EMPRESAS_SUCCESS = createActionType('LOAD_EMPRESAS_SUCCESS');
export const LOAD_EMPRESA = createActionType('LOAD_EMPRESA');
export const LOAD_EMPRESA_SUCCESS = createActionType('LOAD_EMPRESA_SUCCESS');
export const SELECT_EMPRESA = createActionType('SELECT_EMPRESA');
export const UPDATE_EMPRESA = createActionType('UPDATE_EMPRESA');
export const UPDATE_EMPRESA_SUCCESS = createActionType('UPDATE_EMPRESA_SUCCESS');
export const DELETE_EMPRESA = createActionType('DELETE_EMPRESA');
export const DELETE_EMPRESA_SUCCESS = createActionType('DELETE_EMPRESA_SUCCESS');

export class AddEmpresa implements Action {
    readonly type = ADD_EMPRESA;

    constructor(public payload: Empresa) {
    }
}

export class AddEmpresaSuccess implements Action {
    readonly type = ADD_EMPRESA_SUCCESS;

    constructor(public payload: Empresa) {
    }
}

export class LoadEmpresas implements Action {
    readonly type = LOAD_EMPRESAS;
}

export class LoadEmpresasSuccess implements Action {
    readonly type = LOAD_EMPRESAS_SUCCESS;

    constructor(public payload: Empresa[]) {}
}

export class LoadEmpresa implements Action {
    readonly type = LOAD_EMPRESA;

    constructor(public payload: { id: number }) {
    }
}

export class LoadEmpresaSuccess implements Action {
    readonly type = LOAD_EMPRESA_SUCCESS;

    constructor(public payload: Empresa) {
    }
}

export class SelectEmpresa implements Action {
    readonly type = SELECT_EMPRESA;

    constructor(public payload: { id: number }) {
    }
}

export class UpdateEmpresa implements Action {
    readonly type = UPDATE_EMPRESA;

    constructor(public payload: Empresa) {
    }
}

export class UpdateEmpresaSuccess implements Action {
    readonly type = UPDATE_EMPRESA_SUCCESS;

    constructor(public payload: Empresa) {
    }
}

export class DeleteEmpresa implements Action {
    readonly type = DELETE_EMPRESA;

    constructor(public payload: Empresa) {
    }
}

export class DeleteEmpresaSuccess implements Action {
    readonly type = DELETE_EMPRESA_SUCCESS;

    constructor(public payload: Empresa) {
    }
}

export type EmpresasAction =
    AddEmpresa
    | AddEmpresaSuccess
    | DeleteEmpresa
    | DeleteEmpresaSuccess
    | LoadEmpresas
    | LoadEmpresasSuccess
    | LoadEmpresa
    | LoadEmpresaSuccess
    | SelectEmpresa
    | UpdateEmpresa
    | UpdateEmpresaSuccess;

*/
import { Action } from '@ngrx/store';
import { Empresa} from '../models/empresa.model';

export enum EmpresasActionTypes {
    LoadEmpresas = '[Empresas Page] Load Empresas',
    LoadEmpresasSuccess = '[Empresas API] Load Success',
    LoadEmpresasFail = '[Empresas API] Load Fail',
}

export class LoadEmpresas implements Action {
    readonly type = EmpresasActionTypes.LoadEmpresas;
}
export class LoadEmpresasSuccess implements Action {
    readonly type = EmpresasActionTypes.LoadEmpresasSuccess;

    constructor(public payload: Empresa[]) {}
}

export class LoadEmpresasFail implements Action {
    readonly type = EmpresasActionTypes.LoadEmpresasFail;

    constructor(public payload: any) {}
}

export type EmpresasActionsUnion =
    | LoadEmpresas
    | LoadEmpresasSuccess
    | LoadEmpresasFail;
