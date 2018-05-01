import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './services/auth.service';
import { AuthEffect } from './effects/auth.effect';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LogoutPromptComponent } from './components/logout-prompt/logout-prompt.component';
import { MaterialModule } from '@app/material/material.module';

@NgModule({
    providers: [
        AuthService
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        EffectsModule.forFeature([AuthEffect]),
    ],
    declarations: [
        LoginPageComponent,
        LoginFormComponent,
        LogoutPromptComponent,
    ],
    entryComponents: [LogoutPromptComponent],
})
export class AuthModule {}
