import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import { Store } from '@ngrx/store';
import * as fromStore from '@app/state';
import { Logout } from '@app/core/auth/actions/auth.action';
import { Empresa } from './models/empresa.model';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit, AfterViewInit {

    displayedColumns = ['id', 'nombre'];
    companies: MatTableDataSource<Array<Empresa>> = new MatTableDataSource();
    //companies: Observable<Array<Empresa>>;
    public error: {code: number, message: string} = null;

    @ViewChild(MatSort) sort: MatSort;

    constructor(private store: Store<fromStore.State>) {}

    ngOnInit() {
        //this.companies = this.store.select(getAllEmpresas);
        //this.store.dispatch(new LoadEmpresas());

        //console.log("HOLA MELENAS" + this.companies);
    }

    ngAfterViewInit() {
       // this.companies.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        //filterValue = filterValue.trim(); // Remove whitespace
        //filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        //this.companies.filter = filterValue;
    }

    /*add(empresa: Empresa) {
        this.store.dispatch(new AddEmpresa(empresa));
    }

    delete(empresa: Empresa) {
        this.store.dispatch(new DeleteEmpresa(empresa));
    }*/

    public logout() {
        this.store.dispatch(new Logout());
    }
}
