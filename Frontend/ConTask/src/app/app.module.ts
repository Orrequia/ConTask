import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './core/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '@app/state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            name: 'NgRx 2018',
            logOnly: environment.production,
        }),
        AuthModule,
        EffectsModule.forRoot([]),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

/*
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StateModule} from './state/state.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {Routing} from './app-routing.module';
import {MaterialModule} from './material/material.module';
import {AuthenticationComponent} from './core/authentication/authentication.component';
import { EmpresaComponent } from './empresa/empresa.component';

import { AuthenticationService} from './core/authentication/shared/services/authentication.service';
//import {StorageService} from './core/authentication/shared/services/storage.service';
import {EmpresaService} from './empresa/shared/services/empresa.service';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        EmpresaComponent,
        MainComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        Routing,
        BrowserAnimationsModule,
        CoreModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        StateModule.forRoot()
    ],
    providers: [
        AuthenticationService,
        EmpresaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
*/