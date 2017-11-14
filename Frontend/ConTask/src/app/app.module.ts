import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// electron
import { NgxElectronModule } from './ngx-electron/ngx-electron.module';
// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        NgxElectronModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
