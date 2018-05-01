import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Empresa} from '../models/empresa.model';
import { EmpresasActionTypes, EmpresasActionsUnion } from '../actions/empresa.action';

export interface State extends EntityState<Empresa> {}

export const adapter: EntityAdapter<Empresa> = createEntityAdapter<Empresa>({
    selectId: (empresa: Empresa) => empresa.id,
    sortComparer: false,
});

export const initialState: State = adapter.getInitialState();

export function reducer(
    state = initialState,
    action: EmpresasActionsUnion
): State {
    switch (action.type) {
        case EmpresasActionTypes.LoadEmpresasSuccess: {
            return adapter.addAll(action.payload, state);
        }

        default: {
            return state;
        }
    }
}

export const {
    selectIds: getEmpresaIds,
    selectEntities: getEmpresaEntities,
    selectAll: getAllEmpresas,
    selectTotal: getTotalEmpresas,
} = adapter.getSelectors();
