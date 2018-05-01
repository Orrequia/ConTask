import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from '@app/core/auth/actions/auth.action';
import { Sesion } from '@app/core/auth/models/sesion.model';

export interface State {
    sesion: Sesion | null;
}

export const initialState: State = {
    sesion: null,
};

export function reducer(state = initialState, action: AuthActions): State {
    switch (action.type) {
        case AuthActionTypes.LoginSuccess:
            return { ...state, sesion: action.payload.sesion };

        case AuthActionTypes.LogoutConfirmed:
            return initialState;

        default:
            return state;
    }
}

export const selectUser = (state: State) => state.sesion;
