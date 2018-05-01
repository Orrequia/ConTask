import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { HttpClient } from '@angular/common/http';
import { cold } from 'jasmine-marbles';
import { AuthEffect } from './auth.effect';
import { provideMagicalMock, Mock } from 'angular-testing-library';
import { AuthService } from '@app/core/auth/services/auth.service';
import { Observable, of } from 'rxjs/index';
import { Login, LoginSuccess, LoginFailure } from '@app/core/auth/actions/auth.action';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Sesion} from '../models/sesion.model';

describe('Auth Effect', () => {
    let effects: AuthEffect;
    let authService: Mock<AuthService>;
    let actions$: Observable<any>;
    let router: Mock<Router>;
    let dialogService: Mock<MatDialog>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AuthEffect,
                provideMagicalMock(AuthService),
                provideMagicalMock(Router),
                provideMagicalMock(MatDialog),
                provideMockActions(() => actions$)
            ],
        });

        effects = TestBed.get(AuthEffect);
        authService = TestBed.get(AuthService);
        dialogService = TestBed.get(MatDialog);
        router = TestBed.get(Router);
    });

    it('should redirect the user after successful login', () => {
        const sesion: Sesion = new Sesion({
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c' +
            '3VhcmlvX2lkIjoxLCJpYXQiOjE1MjUxNjUyOTIsImV4cCI6MTUyNTE3NTI5Mn0.aLl6TeQR' +
            'MxGoLmORdKdoxE613n5-t1iB50eRmfunAhc',
            usuario: {
                id: 1,
                nombre: null,
                correo: null,
                telefono: null,
                alias: 'orrequia',
                contrasena: '$2a$10$e.li64RBPRpkXk0VLesVjOTUp4yQfs4YykQPktREGE908lR8PsLkq',
                createdAt: '2018-03-22T18:08:50.635Z',
                updatedAt: '2018-03-22T18:08:50.635Z',
                grupoId: 1
            }
        });
        const action = new LoginSuccess({ sesion });

        actions$ = of(action);
        effects.loginRedirect$.subscribe();

        expect(router.navigate).toHaveBeenCalledWith(['/empresa']);
    });
});
