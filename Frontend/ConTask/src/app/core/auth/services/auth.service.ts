import {HttpClient, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { of } from 'rxjs/index';
import { Authenticate} from '../models/authenticate.model';
import { BaseService} from '../../services/base.service';
import { Store } from '@ngrx/store';
import { Sesion } from '../models/sesion.model';

import * as fromStore from '@app/state';

/**
 * The user service.
 */
@Injectable()
export class AuthService extends BaseService {

    private loggedIn = false;

    constructor(private store: Store<fromStore.State>,
                private http: HttpClient) {
        super(store);

        this.uri = `${this.uri}/auth`;
    }

    public login(auth: Authenticate): Observable<Sesion> {
        const usuario = this.http.post<Sesion>(this.uri + '/login', auth);

        console.log('Hola: ' + usuario);
        console.log(typeof usuario);

        return usuario;
    }

    public check(): Observable<boolean> {
        return this.store.select(fromStore.selectIsLoggedIn);
    }

    public logout(): Observable<boolean> {
        return of(true);
    }
}
