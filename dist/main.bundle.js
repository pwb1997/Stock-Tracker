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

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".frame {\r\n  margin-top: 60px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"frame\">\n  <h1>[to be implemented]</h1>\n  <p>cookie(debug): {{cookie}}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.cookie = document.cookie;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-nav-bar></app-nav-bar>\n</header>\n<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_portfolio_new_portfolio_component__ = __webpack_require__("../../../../../src/app/new-portfolio/new-portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__new_stock_new_stock_component__ = __webpack_require__("../../../../../src/app/new-stock/new-stock.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'new-portfolio',
        component: __WEBPACK_IMPORTED_MODULE_9__new_portfolio_new_portfolio_component__["a" /* NewPortfolioComponent */],
    },
    {
        path: ':pslugs',
        component: __WEBPACK_IMPORTED_MODULE_12__portfolio_portfolio_component__["a" /* PortfolioComponent */],
    },
    {
        path: ':pslugs/new-stock',
        component: __WEBPACK_IMPORTED_MODULE_13__new_stock_new_stock_component__["a" /* NewStockComponent */],
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__new_portfolio_new_portfolio_component__["a" /* NewPortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_12__portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_13__new_stock_new_stock_component__["a" /* NewStockComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8_ngx_cookie_service__["a" /* CookieService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".frame {\r\n  margin-top: 70px;\r\n  position: absolute;\r\n}\r\n\r\n.pname {\r\n  color: rgb(68, 68, 199);\r\n  text-decoration: underline;\r\n}\r\n\r\n.pname:visited {\r\n  color: rgb(68, 68, 199);\r\n  text-decoration: underline;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"frame\" [style.visibility]=\"loggedin==='false'? 'visible': 'hidden'\">\n  <h1>Please log in to continue</h1>\n</div>\n\n<div class=\"frame\" [style.visibility]=\"loggedin==='true'? 'visible': 'hidden'\" style.position=\"relative\">\n  <h1>Hi, {{name.split(\" \")[0]}}!</h1>\n  <h2>My Portfolios</h2>\n  <table id=\"plist\" *ngIf=\"portfolios\">\n    <tr>\n      <th>Tag</th>\n      <th>Name</th>\n      <th>Value</th>\n      <th>Day Chg</th>\n      <th>Day Chg %</th>\n      <th>Week Chg</th>\n      <th>Week Chg %</th>\n      <th>Total Chg</th>\n      <th>Total Chg %</th>\n    </tr>\n    <tr *ngFor=\"let portfolio of portfolios\">\n      <th style.backgroundColor={{portfolio.tag}}>{{portfolio.colorTag}}</th>\n      <th>\n        <a routerLink=\"/{{portfolio.name}}\" class=\"pname\">{{portfolio.name}}</a>\n      </th>\n      <th>{{portfolio.value}}</th>\n      <th>{{portfolio.dchange}}</th>\n      <th>{{portfolio.dchangep}}</th>\n      <th>{{portfolio.wchange}}</th>\n      <th>{{portfolio.wchangep}}</th>\n      <th>{{portfolio.tchange}}</th>\n      <th>{{portfolio.tchangep}}</th>\n    </tr>\n  </table>\n  <a routerLink=\"/new-portfolio\" class=\"button secondary small\">+ Create New Portfolio</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(cookieService, http) {
        this.cookieService = cookieService;
        this.http = http;
        this.name = '';
        this.loggedin = 'false';
        this.portfolios = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = this.cookieService.get('username');
        this.loggedin = this.cookieService.get('loggedin');
        if (this.loggedin === 'true') {
            this.http.get('/api/portfolios', { responseType: 'text' }).subscribe(function (res) {
                _this.portfolios = JSON.parse(res);
                console.log(_this.portfolios);
            }, function (err) {
                console.log(err);
            });
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\r\n  overflow: hidden;\r\n  background-color: #333;\r\n  position: fixed;\r\n  top: 0px;\r\n  width: 100%;\r\n  height: 60px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\nli {\r\n  float: left;\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  line-height: 60px;\r\n  text-decoration: none;\r\n  font-size: 40px;\r\n  font-family: Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif;\r\n}\r\n\r\n#l1 {\r\n  top: 16px;\r\n}\r\n\r\n#l2 {\r\n  top: 36px;\r\n}\r\n\r\nli p {\r\n  position: fixed;\r\n  display: block;\r\n  line-height: 8px;\r\n  font-size: 20px;\r\n  left: 65px;\r\n}\r\n\r\nimg {\r\n  height: 49px;\r\n  width: 50px;\r\n}\r\n\r\n.image {\r\n  height: 60px;\r\n  width: 150px;\r\n  padding-top: 5px;\r\n  padding-right: 80px;\r\n}\r\n\r\n.menu {\r\n  padding: 0px 20px;\r\n  font-variant: small-caps;\r\n}\r\n\r\na,\r\na:hover,\r\na:visited {\r\n  color: #f2f2f2;\r\n  text-decoration: none;\r\n}\r\n\r\n#my-signin2 {\r\n  position: fixed;\r\n  right: 12px;\r\n  margin-top: 12px;\r\n}\r\n\r\n#signout {\r\n  position: fixed;\r\n  right: 12px;\r\n  margin-top: 12px;\r\n  height: 36px;\r\n  width: 110px;\r\n  display: block;\r\n  text-align: center;\r\n  line-height: 36px;\r\n  font-family: Roboto, arial, sans-serif;\r\n  font-size: 13px;\r\n  font-weight: 500px;\r\n  letter-spacing: 0.21px;\r\n  color: rgb(255, 255, 255);\r\n  padding-left: 43px;\r\n}\r\n\r\n#signout p {\r\n  background: #4484f4;\r\n  width: 60px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li class=\"image\">\n      <img src=\"favicon.ico\" alt=\"icon\">\n      <p id=\"l1\">\n        Stock.</p>\n      <p id=\"l2\">Tracker</p>\n    </li>\n    <li class=\"menu\" [@hover]=\"hoverState1\" (mouseenter)=\"mouseEnter1()\" (mouseleave)=\"mouseLeave1()\">\n      <a routerLink=\"/home\" [@hover]=\"hoverState1\">.Home</a>\n    </li>\n    <li class=\"menu\" [@hover]=\"hoverState2\" (mouseenter)=\"mouseEnter2()\" (mouseleave)=\"mouseLeave2()\">\n      <a routerLink=\"/about\" [@hover]=\"hoverState2\">.About</a>\n    </li>\n    <li class=\"menu\" [@hover]=\"hoverState3\" (mouseenter)=\"mouseEnter3()\" (mouseleave)=\"mouseLeave3()\">\n      <a href=\"https://github.com/nyu-csci-ua-0480-003-fall-2017/pb1713-final-project\" target=\"_blank\" [@hover]=\"hoverState3\">.Github</a>\n    </li>\n  </ul>\n  <div id=\"my-signin2\"></div>\n  <a id=\"signout\" routerLink=\"/home\" onclick=\"signOut()\" [style.margin-top]=\"signoutVisibility\">\n    <p>Sign out</p>\n  </a>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = (function () {
    function NavBarComponent(cookieService) {
        this.cookieService = cookieService;
        // hover
        this.hoverState1 = 'inactive';
        this.hoverState2 = 'inactive';
        this.hoverState3 = 'inactive';
        // visibility of sign out
        this.loggedin = 'false';
        this.signoutVisibility = '-100px';
    }
    // hover functions
    NavBarComponent.prototype.mouseEnter1 = function () {
        this.hoverState1 = 'active';
    };
    NavBarComponent.prototype.mouseLeave1 = function () {
        this.hoverState1 = 'inactive';
    };
    NavBarComponent.prototype.mouseEnter2 = function () {
        this.hoverState2 = 'active';
    };
    NavBarComponent.prototype.mouseLeave2 = function () {
        this.hoverState2 = 'inactive';
    };
    NavBarComponent.prototype.mouseEnter3 = function () {
        this.hoverState3 = 'active';
    };
    NavBarComponent.prototype.mouseLeave3 = function () {
        this.hoverState3 = 'inactive';
    };
    NavBarComponent.prototype.ngOnInit = function () {
        this.loggedin = this.cookieService.get('loggedin');
        this.signoutVisibility = this.loggedin === 'true' ? '12px' : '-100px';
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('hover', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        backgroundColor: '#ae66ae',
                        color: '#333',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        backgroundColor: '#333',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive <=> active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms')),
                ])
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new-portfolio/new-portfolio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".frame {\r\n  margin-top: 60px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-portfolio/new-portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"frame\">\n  <h1>Add a Portfolio</h1>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    Name\n    <input name=\"name\" [placeholder]=\"validation\" [style.background-color]=\"color\" ngModel required>{{exist}}\n    <br>Description\n    <input name=\"description\" placeholder=\"optional\" ngModel>\n    <br>Color Tag\n    <select name=\"color\" ngModel>\n      <option value=''>- Please Choose -</option>\n      <option value=\"white\">White</option>\n      <option value=\"black\">Black</option>\n      <option value=\"grey\">Grey</option>\n      <option value=\"blue\">Blue</option>\n      <option value=\"green\">Green</option>\n      <option value=\"orange\">Orange</option>\n      <option value=\"red\">Red</option>\n      <option value=\"purple\">Purple</option>\n    </select>\n    <button>Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-portfolio/new-portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewPortfolioComponent = (function () {
    function NewPortfolioComponent(http, router) {
        this.http = http;
        this.router = router;
        this.validation = 'eg. Portfolio 1';
        this.color = 'white';
        this.exist = "";
    }
    NewPortfolioComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (!f.valid) {
            this.validation = 'Please input a Valid Name!';
            this.color = '#ff9292';
        }
        else {
            f.value.color = f.value.color || 'white';
            this.http.post('/api/add-portfolio', f.value, { responseType: 'text' }).subscribe(function (res) {
                _this.router.navigateByUrl('/home');
            }, function (err) {
                if (err.status === 400) {
                    _this.exist = 'Name Exists, Try Another!';
                    _this.color = '#ff9292';
                }
                ;
            });
        }
    };
    NewPortfolioComponent.prototype.ngOnInit = function () {
    };
    NewPortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-portfolio',
            template: __webpack_require__("../../../../../src/app/new-portfolio/new-portfolio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-portfolio/new-portfolio.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewPortfolioComponent);
    return NewPortfolioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new-stock/new-stock.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".frame {\r\n  margin-top: 70px;\r\n  position: absolute;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-stock/new-stock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"frame\">\n  <h1>Add a Stock</h1>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    Symbol\n    <input name=\"symbol\" [placeholder]=\"validation\" [style.background-color]=\"color\" ngModel required>{{exist}}\n    <br>Share\n    <input name=\"share\" placeholder=\"0\" ngModel>\n    <br>Cost Basis\n    <input name=\"cost basis\" placeholder=\"0\" ngModel>\n    <button>Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-stock/new-stock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewStockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewStockComponent = (function () {
    function NewStockComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.slugs = '';
        this.validation = 'eg. AAPL';
        this.color = "white";
        this.exist = "";
    }
    NewStockComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (!f.valid) {
            this.validation = 'Please input a Valid Symbol!';
            this.color = '#ff9292';
        }
        else {
            this.http.post('/api/' + this.slugs + "/add-stock", f.value, { responseType: 'text' }).subscribe(function (res) {
                _this.router.navigateByUrl('/' + _this.slugs);
            }, function (err) {
                if (err.status === 400) {
                    _this.exist = 'Symbol Not Found, Try Another!';
                    _this.color = '#ff9292';
                }
            });
        }
    };
    NewStockComponent.prototype.ngOnInit = function () {
        this.slugs = this.route.snapshot.params['pslugs'];
    };
    NewStockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-stock',
            template: __webpack_require__("../../../../../src/app/new-stock/new-stock.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-stock/new-stock.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewStockComponent);
    return NewStockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".frame {\r\n  margin-top: 70px;\r\n  position: absolute;\r\n}\r\n\r\n.symbol {\r\n  color: rgb(68, 68, 199);\r\n  text-decoration: underline;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"frame\">\n  <h2>{{slugs}}</h2>\n  <table id=\"slist\" *ngIf=\"stocks\">\n    <tr>\n      <th>Symbol</th>\n      <th>Shares</th>\n      <th>Cost Basis</th>\n      <th>Value</th>\n      <th>Day Chg</th>\n      <th>Day Chg %</th>\n      <th>Week Chg</th>\n      <th>Week Chg %</th>\n      <th>Total Chg</th>\n      <th>Total Chg %</th>\n    </tr>\n    <tr>\n      <th>{{slugs}}</th>\n      <th></th>\n      <th>{{portfolio.bvalue}}</th>\n      <th>{{portfolio.value}}</th>\n      <th>{{portfolio.dchange}}</th>\n      <th>{{portfolio.dchangep}}</th>\n      <th>{{portfolio.wchange}}</th>\n      <th>{{portfolio.wchangep}}</th>\n      <th>{{portfolio.tchange}}</th>\n      <th>{{portfolio.tchangep}}</th>\n    </tr>\n    <tr *ngFor=\"let stock of stocks\">\n      <th>\n        <a routerLink=\"/{{slugs}}/{{stock.symbol}}\" class=\"symbol\">{{stock.symbol}}</a>\n      </th>\n      <th>{{stock.share}}</th>\n      <th>{{stock.basis}}</th>\n      <th>{{stock.value}}</th>\n      <th>{{stock.dchange}}</th>\n      <th>{{stock.dchangep}}</th>\n      <th>{{stock.wchange}}</th>\n      <th>{{stock.wchangep}}</th>\n      <th>{{stock.tchange}}</th>\n      <th>{{stock.tchangep}}</th>\n    </tr>\n  </table>\n  <a routerLink=\"/{{slugs}}/new-stock\" class=\"button secondary small\">+ Add New Stock</a>\n  <a (click)=\"delete()\" class=\"button secondary small\">+ Delete {{slugs}}</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PortfolioComponent = (function () {
    function PortfolioComponent(route, cookieService, http, router) {
        this.route = route;
        this.cookieService = cookieService;
        this.http = http;
        this.router = router;
        this.slugs = '';
        this.loggedin = 'false';
        this.portfolio = {};
        this.stocks = [];
    }
    PortfolioComponent.prototype.delete = function () {
        var _this = this;
        this.http.get('/api/del-portfolio/' + this.slugs, { responseType: 'text' }).subscribe(function (res) {
            _this.router.navigateByUrl('/home');
        }, function (err) {
            alert('Failed to Delete ' + _this.slugs);
        });
    };
    PortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slugs = this.route.snapshot.params['pslugs'];
        this.loggedin = this.cookieService.get('loggedin');
        if (this.loggedin === 'true') {
            this.http.get('/api/portfolios/' + this.slugs, { responseType: 'text' }).subscribe(function (res) {
                _this.portfolio = JSON.parse(res);
                _this.stocks = _this.portfolio.stocks;
            }, function (err) {
                console.log(err);
            });
        }
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("../../../../../src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portfolio/portfolio.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PortfolioComponent);
    return PortfolioComponent;
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
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map