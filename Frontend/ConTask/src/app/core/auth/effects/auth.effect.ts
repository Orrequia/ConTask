import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, exhaustMap, catchError, tap, mergeMap} from 'rxjs/operators';
import { of, empty } from 'rxjs/index';
import { Router} from '@angular/router';
import { MatDialog } from '@angular/material';
import { LogoutPromptComponent } from '@app/core/auth/components/logout-prompt/logout-prompt.component';
import { AuthService } from '../services/auth.service';
import {
    AuthActions,
    AuthActionTypes,
    Login,
    LoginSuccess,
    LoginFailure,
    Logout,
    LogoutConfirmed,
    LogoutComplete,
    LogoutCancelled
} from '../actions/auth.action';
import { Sesion } from '../models/sesion.model';

@Injectable()
export class AuthEffect {

    @Effect()
    login$ = this.actions$
        .ofType<Login>(AuthActionTypes.Login)
        .pipe(
            map(action => action.payload),
            exhaustMap( auth =>
                this.authService
                    .login(auth)
                    .pipe(
                        map(sesion => new LoginSuccess({ sesion })),
                        catchError(error => of(new LoginFailure(error))),
                    ),
            ),
        );

    @Effect({ dispatch: false })
    loginRedirect$ = this.actions$
        .ofType<LoginSuccess>(AuthActionTypes.LoginSuccess)
        .pipe(tap(() => this.router.navigate(['/empresa'])));

    @Effect()
    logoutConfirmation$ = this.actions$
        .ofType<Logout>(AuthActionTypes.Logout)
        .pipe(
            exhaustMap(() =>
            this.dialogService
                .open(LogoutPromptComponent)
                .afterClosed()
                .pipe(
                    map(confirmed => {
                        if (confirmed) {
                            return new LogoutConfirmed();
                        } else {
                            return new LogoutCancelled();
                        }
                    })
                ),
            ),
        );

    @Effect({ dispatch: false })
    logout$ = this.actions$
        .ofType<LogoutConfirmed>(AuthActionTypes.LogoutConfirmed)
        .pipe(
            exhaustMap(auth =>
                this.authService
                    .logout()
                    .pipe(
                        tap(() => this.router.navigate(['/login'])),
                        map(() => new LogoutComplete()),
                        catchError(() => of(new LogoutComplete())),
                    ),
            ),
        );

    constructor(private actions$: Actions,
                private authService: AuthService,
                private router: Router,
                private dialogService: MatDialog,
                ) {}
}
