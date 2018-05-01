import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Validators, FormGroup, FormControl } from '@angular/forms';
import { Authenticate } from '../../models/authenticate.model';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    @Input() error: string | null;

    @Input() set disabled(isDisabled: boolean) {
        if (isDisabled) {
            this.loginForm.disable();
        } else {
            this.loginForm.enable();
        }
    }

    @Output() submitted = new EventEmitter<Authenticate>();

    loginForm = new FormGroup({
        alias: new FormControl('', [Validators.required]),
        contrasena: new FormControl('', [Validators.required])
    });

    ngOnInit() {}

    submit() {
        const value: Authenticate = this.loginForm.value;

        if (this.loginForm.valid) {
            this.submitted.emit(value);
        }
    }
}


/*LO MIOO    public form: FormGroup;
    public submitted: Boolean = false;
    public error: Observable<string>;
    public loading: Observable<boolean>;
    private alive = true;

    constructor(private formBuilder: FormBuilder,
                private store: Store<AppState>) {
    }

    public ngOnInit() {
        this.form = this.formBuilder.group({
            alias: ['', Validators.required],
            contrasena: ['', Validators.required],
        });

        this.error = this.store.select(getAuthenticationError);
        this.loading = this.store.select(isAuthenticationLoading);

        this.store.select(isAuthenticated)
            .takeWhile(() => this.alive)
            .filter(authenticated => authenticated)
            .subscribe(value => this.store.dispatch(
                new RouterActions.Go({
                    path: ['/empresa']})));
    }

    public ngOnDestroy() {
        this.alive = false;
    }

    public submit(): void {

        if (this.form.valid) {
            const loginObject = new LoginObject(this.form.value);

            this.store.dispatch(new AuthenticateAction(loginObject));
        }

        /*if (this.loginForm.valid) {
            this.authenticationService.login(new LoginObject(this.loginForm.value)).subscribe(
                data => this.correctLogin(data),
                error => this.error = JSON.parse(error._body)
            );
        }
        this.submitted = true;
    }
    /*private correctLogin(data: Sesion) {
        this.storageService.setCurrentSesion(data);
        this.router.navigate(['/main/empresa']);
    }
}*/

