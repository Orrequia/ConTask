webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// angular


// app

var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* AppRoutes */], { useHash: true })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Hola</p>\n\n<div class=\"col-md-6\">\n    <h2>Listao de notas</h2>\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let n of my_notes\">{{ n.title }}</li>\n    </ul>\n    <a class=\"btn btn-primary btn-block\" (click)=\"addNote()\">Nueva Nota</a>\n</div>\n\n<div class=\"col-md-6\" *ngIf=\"show_form\">\n    <h2>Nueva nota</h2>\n    <input class=\"form-control\" type=\"text\" placeholder=\"Titulo de la nota\" [(ngModel)]=\"note.title\"/>\n    <br>\n    <textarea class=\"form-control\" placeholder=\"Descripción de la nota\" [(ngModel)]=\"note.description\"></textarea>\n    <hr />\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <a class=\"btn btn-default btn-block\" (click)=\"cancel()\">Cancelar</a>\n        </div>\n        <div class=\"col-md-6\">\n            <a class=\"btn btn-primary btn-block\" (click)=\"createNote()\">Guardar Nota</a>\n        </div>\n    </div>\n</div>\n\n<div class=\"col-md-6\">\n    <h2>Listao de mensajes</h2>\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let n of results\">{{ n.text }}</li>\n    </ul>\n    <a class=\"btn btn-primary btn-block\" (click)=\"addMessage()\">Nuevo Mensaje</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    // Inject HttpClient into your component or service.*/
    function AppComponent(http) {
        this.http = http;
        this.name = '';
        this.id = 5;
        this.my_notes = [
            { id: 1, title: 'Nota 1', description: 'Descripción de la nota numero 1' },
            { id: 2, title: 'Nota 2', description: 'Descripción de la nota numero 2' },
            { id: 3, title: 'Nota 3', description: 'Descripción de la nota numero 3' },
            { id: 4, title: 'Nota 4', description: 'Descripción de la nota numero 4' },
        ];
        this.note = { id: null, title: null, description: null };
        this.show_form = false;
        this.show_new_message = false;
    }
    AppComponent.prototype.addNote = function () {
        this.show_form = true;
    };
    AppComponent.prototype.cancel = function () {
        this.show_form = false;
        this.note = { id: null, title: null, description: null };
    };
    AppComponent.prototype.createNote = function () {
        this.note.id = this.id;
        this.id++;
        this.my_notes.push(this.note);
        this.show_form = false;
        this.note = { id: null, title: null, description: null };
    };
    ;
    AppComponent.prototype.addMessage = function () {
        this.show_new_message = true;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Make the HTTP request:
        this.http.get('http://localhost:3000/api/messages').subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.results = data;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'seed-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_electron_ngx_electron_module__ = __webpack_require__("../../../../../src/app/ngx-electron/ngx-electron.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// electron

// app


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_electron_ngx_electron_module__["a" /* NgxElectronModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/**
 * Define app module routes here, e.g., to lazily load a module
 * (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
var AppRoutes = [
    { path: '', pathMatch: 'full', redirectTo: '/welcome' }
];


/***/ }),

/***/ "../../../../../src/app/ngx-electron/ngx-electron.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxElectronModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_electron_service__ = __webpack_require__("../../../../../src/app/ngx-electron/ngx-electron.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NgxElectronModule = (function () {
    function NgxElectronModule() {
    }
    NgxElectronModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ngx_electron_service__["a" /* NgxElectronService */]
            ]
        })
    ], NgxElectronModule);
    return NgxElectronModule;
}());



/***/ }),

/***/ "../../../../../src/app/ngx-electron/ngx-electron.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxElectronService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ELECTRON_HOST = 'ELECTRON_BRIDGE_HOST';
var ELECTRON_CLIENT = 'ELECTRON_BRIDGE_CLIENT';
var NgxElectronService = (function () {
    function NgxElectronService() {
        var _this = this;
        this._electron = null;
        this.listenerSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.listener$ = this.listenerSubject.asObservable();
        if (this.electron) {
            this.electron.ipcRenderer.on(ELECTRON_CLIENT, function (event, msg) {
                _this.listenerSubject.next(msg);
            });
        }
    }
    NgxElectronService.prototype.send = function (data) {
        this.ipcRenderer.send(ELECTRON_HOST, data);
    };
    Object.defineProperty(NgxElectronService.prototype, "ipcRenderer", {
        get: function () {
            return this.electron.ipcRenderer || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxElectronService.prototype, "desktopCapturer", {
        get: function () {
            return this.electron.desktopCapturer || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxElectronService.prototype, "webFrame", {
        get: function () {
            return this.electron.webFrame || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxElectronService.prototype, "remote", {
        get: function () {
            return this.electron.remote || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxElectronService.prototype, "clipboard", {
        get: function () {
            return this.electron.clipboard || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxElectronService.prototype, "crashReporter", {
        get: function () {
            return this.electron.crashReporter || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxElectronService.prototype, "nativeImage", {
        get: function () {
            return this.electron.nativeImage || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxElectronService.prototype, "screen", {
        get: function () {
            return this.electron.screen || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxElectronService.prototype, "shell", {
        get: function () {
            return this.electron.shell || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxElectronService.prototype, "electron", {
        get: function () {
            if (!this._electron) {
                this._electron = window ? window['electron'] : null;
            }
            return this._electron;
        },
        enumerable: true,
        configurable: true
    });
    NgxElectronService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NgxElectronService);
    return NgxElectronService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map