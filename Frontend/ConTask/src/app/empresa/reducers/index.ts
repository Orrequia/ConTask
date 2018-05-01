import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
} from '@ngrx/store';
import * as fromEmpresas from './empresas';
import * as fromRoot from '../../reducers';

export interface EmpresasState {
    empresas: fromEmpresas.State;
}

export interface State extends fromRoot.State {
    empresas: EmpresasState;
}

export const reducers: ActionReducerMap<EmpresasState> = {
    empresas: fromEmpresas.reducer,
};

export const getEmpresasState = createFeatureSelector<EmpresasState>('empresas');

export const getEmpresaEntitiesState = createSelector(
    getEmpresasState,
    state => state.empresas
);

export const getEmpresaEntities = createSelector(getEmpresaEntitiesState, fromEmpresas.getEmpresaEntities);
export const getEmpresaIds = createSelector(getEmpresaEntitiesState, fromEmpresas.getEmpresaIds);

export const getAllEmpresas = createSelector(
    getEmpresaEntities,
    getEmpresaIds,
    (entities, ids: string[]) => {
        return ids.map(id => entities[id]);
    }
);
