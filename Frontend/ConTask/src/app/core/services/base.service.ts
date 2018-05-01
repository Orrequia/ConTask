import { HttpHeaders } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';
import { Subject } from 'rxjs/index';

import * as fromStore from '@app/state';

export class BaseService {

    uri = 'http://localhost:3000';
    readonly headers: HttpHeaders;
    token: string;

    constructor(store: Store<fromStore.State>) {

        //store.select(selectUser).map(sesion => sesion.token).subscribe(val => this.token = val);
        //this.token = store.pipe(select(fromAuth.selectUser).token);
        store.select(fromStore.selectAuthUser).subscribe(sesion => this.token = sesion.token);

        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.headers = this.headers.append('Authorization', this.token);
    }
}
