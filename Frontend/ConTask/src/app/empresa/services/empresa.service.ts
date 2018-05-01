import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of} from 'rxjs/index';
import {catchError, switchMap} from 'rxjs/operators';
import { Store } from '@ngrx/store';

//import { StorageService} from '../../../core/authentication/shared/services/storage.service';
import { Empresa } from '../models/empresa.model';
import { BaseService } from '../../core/services/base.service';
import * as fromStore from '@app/state';

@Injectable()
export class EmpresaService extends BaseService {

    constructor(private store: Store<fromStore.State>,
                private http: HttpClient) {
        super(store);

        this.uri = `${this.uri}/empresa`;
    }

    createEmpresa(empresa: Empresa): Observable<any> {
        return this.http.post<Empresa>(this.uri, empresa, {headers: this.headers});
    }
    getEmpresas(): Observable<Array<Empresa>> {
        return this.http.get<Array<Empresa>>(this.uri, {headers: this.headers});
    }

    getEmpresa(id: number): Observable<Empresa> {
        return this.http.get<Empresa>(`${this.uri}/${id}`, {headers: this.headers});
    }

    updateEmpresa(empresa: Empresa): Observable<Empresa> {
        return this.http.put<Empresa>(`${this.uri}/${empresa.id}`, empresa, {headers: this.headers});
    }
    deleteEmpresa(empresa: Empresa): Observable<Empresa> {
        return this.http.delete(`${this.uri}/${empresa.id}`, {headers: this.headers})
            .pipe(
                switchMap(() => of(empresa))
            );
    }

    /*private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable(
            'Something bad happened; please try again later.');
    }*/
}
