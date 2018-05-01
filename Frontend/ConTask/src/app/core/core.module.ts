import {NgModule, Optional, SkipSelf} from '@angular/core';
import { AuthGuardService } from './auth/services/auth-guard.service';

@NgModule({
    declarations: [  ],
    imports: [],
    providers: [
        AuthGuardService
    ],
    bootstrap: []
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
