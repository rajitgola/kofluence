(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<section class=\"container\">\n    <section class=\"searchContainer\">\n        <div>\n            <tag-input [(ngModel)]='items' [placeholder]=\"'Enter to Search'\" (ngModelChange)=\"onNewSearch($event)\"></tag-input>\n        </div>\n    </section>\n\n    <section class=\"searchResults\">\n        <section>\n            <h4 class=\"header-title\">\n                <strong>You may also search for:</strong>\n            </h4>\n            <div class=\"searchSuggestions\">\n                <a *ngFor=\"let suggestion of searchSuggestions\">\n                    <h3><strong>#{{suggestion?.hashtag}}</strong></h3>\n                    <p>{{suggestion?.posts}}</p>\n                </a>\n            </div>\n        </section>\n\n        <section class=\"trends d-flex j-center\">\n            <div>\n                <h2 class=\"text-center\"><strong>200k</strong></h2>\n                <p class=\"text-center\">Number of people talking about #fashion , #shoes</p>\n            </div>\n            <div>\n                <h2 class=\"text-center\"><strong>20k</strong></h2>\n                <p class=\"text-center\">Number of Kofluence influencers talking about #fashion , #shoes</p>\n            </div>\n        </section>\n\n        <section class=\"posts\">\n            <div class=\"d-flex j-center headings\">\n                <a class=\"link__post active\">Top Posts</a>\n                <a class=\"link__post\">Latest Posts</a>\n            </div>\n            <div class=\"results row j-center\">\n                <div class=\"postContainer column-50\"\n                    *ngFor=\"let post of posts\">\n                    <div class=\"imgContainer\"  \n                        [ngStyle]=\"{'background-image':'url(assets/' + post?.images + '.png)'}\">\n                    </div>\n                    <span class=\"views icon__float\">\n                        <i class=\"fa fa-eye\"></i>\n                        {{post?.views}}\n                    </span>\n                    <span class=\"likes icon__float\">\n                        <i class=\"fa fa-heart\"></i>\n                        {{post?.liked}}\n                    </span>\n                </div>\n            </div>\n        </section>\n\n        <section>\n            <div class=\"startCampaign\">\n                <a></a>\n            </div>    \n        </section>\n\n    </section>\n</section>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex; }\n\n.row {\n  margin-right: -10px;\n  margin-left: -10px;\n  display: flex;\n  flex-wrap: wrap; }\n\n.text-center {\n  text-align: center; }\n\n.column-50 {\n  flex: 0 0 45%;\n  max-width: 45%;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: relative;\n  width: 100%; }\n\n.container {\n  max-width: 960px;\n  margin: 1em auto; }\n\n.j-center {\n  justify-content: space-around; }\n\n.searchSuggestions {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around; }\n\n.searchSuggestions a {\n    width: 100%;\n    background: #ffdf7f;\n    color: #000000;\n    margin: 0 1em;\n    border-radius: 5px;\n    text-align: center; }\n\n.posts .postContainer {\n  position: relative;\n  margin: 10px 0; }\n\n.posts .postContainer .imgContainer {\n    min-height: 250px;\n    height: auto;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center; }\n\n.posts .postContainer .icon__float {\n    position: absolute;\n    color: white;\n    line-height: 13px; }\n\n.posts .postContainer .icon__float i.fa {\n      margin-right: 10px; }\n\n.posts .postContainer .views {\n    left: 10%;\n    bottom: 20%; }\n\n.posts .postContainer .likes {\n    left: 10%;\n    bottom: 10%; }\n\n.posts .headings a {\n  font-size: 24px;\n  padding: 5px 30px; }\n\n.posts .headings a.active {\n    border-bottom: 2px solid #ffbf00; }\n\n.trends div {\n  margin: 0em 1em; }\n\n.trends h2 {\n  font-size: 34px; }\n\n.posts, .trends {\n  margin: 1em; }\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px; } }\n\n@media (max-width: 576px) {\n  .container {\n    max-width: 540px;\n    margin: 1em; }\n  .column-50 {\n    flex: 0 0 43%;\n    max-width: 43%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXENvZGVfMlxcUHJvamVjdFxca29mbHVlbmNlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxjQUFhLEVBQ2I7O0FBRUQ7RUFDQyxvQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWtCO0VBQ2xCLGdCQUFrQixFQUNsQjs7QUFFRDtFQUNDLG1CQUFrQixFQUNsQjs7QUFFRDtFQUNDLGNBQXNCO0VBQ3RCLGVBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsbUJBQXVCO0VBQ3ZCLFlBQW1CLEVBQ25COztBQUVEO0VBQ0MsaUJBQWdCO0VBQ2hCLGlCQUFxQixFQUNyQjs7QUFFRDtFQUNDLDhCQUE4QixFQUM5Qjs7QUFFRDtFQUNDLGNBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQiw4QkFBNkIsRUFTN0I7O0FBWkQ7SUFLRSxZQUFtQjtJQUNuQixvQkFBc0I7SUFDdEIsZUFBc0I7SUFDdEIsY0FBb0I7SUFDcEIsbUJBQWtCO0lBQ2xCLG1CQUFrQixFQUNsQjs7QUFHRjtFQUVFLG1CQUFrQjtFQUNsQixlQUFlLEVBd0JmOztBQTNCRjtJQUtHLGtCQUEwQjtJQUMxQixhQUF5QjtJQUN6Qiw2QkFBOEI7SUFDOUIsdUJBQTBCO0lBQzFCLDRCQUEyQixFQUMzQjs7QUFWSDtJQVlHLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osa0JBQWlCLEVBSWpCOztBQWxCSDtNQWdCSSxtQkFBa0IsRUFDbEI7O0FBakJKO0lBb0JHLFVBQVM7SUFDVCxZQUFhLEVBQ2I7O0FBdEJIO0lBd0JHLFVBQVM7SUFDVCxZQUFXLEVBQ1g7O0FBMUJIO0VBK0JNLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBSXBCOztBQXBDSDtJQWtDTyxpQ0FBZ0MsRUFDaEM7O0FBS1A7RUFFRSxnQkFBZ0IsRUFDaEI7O0FBSEY7RUFLRSxnQkFBZSxFQUNmOztBQUdGO0VBQ0MsWUFBVyxFQUNYOztBQU1EO0VBQ0M7SUFDSSxpQkFBZ0IsRUFDbkIsRUFBQTs7QUFHRjtFQUNDO0lBQ0ssaUJBQWdCO0lBQ2hCLFlBQVcsRUFDZjtFQUVEO0lBQ0MsY0FBc0I7SUFDdEIsZUFBa0IsRUFDbEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vSGVscGVyIENsYXNzZXNcclxuLmQtZmxleHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucm93e1xyXG5cdG1hcmdpbi1yaWdodDogLTEwcHg7XHJcblx0bWFyZ2luLWxlZnQgOiAtMTBweDtcclxuXHRkaXNwbGF5ICAgICA6IGZsZXg7XHJcblx0ZmxleC13cmFwICAgOiB3cmFwO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXJ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29sdW1uLTUwe1xyXG5cdGZsZXggICAgICAgICA6IDAgMCA0NSU7XHJcblx0bWF4LXdpZHRoICAgIDogNDUlO1xyXG5cdHBhZGRpbmctbGVmdCA6IDEwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTBweDtcclxuXHRwb3NpdGlvbiAgICAgOiByZWxhdGl2ZTtcclxuXHR3aWR0aCAgICAgICAgOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG5cdG1heC13aWR0aDogOTYwcHg7XHJcblx0bWFyZ2luICAgOiAgMWVtIGF1dG8gO1xyXG59XHJcblxyXG4uai1jZW50ZXJ7XHJcblx0anVzdGlmeS1jb250ZW50IDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uc2VhcmNoU3VnZ2VzdGlvbnN7XHJcblx0ZGlzcGxheSAgICAgICAgOiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uIDogcm93O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdGF7XHJcblx0XHR3aWR0aCAgICAgICAgOiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZCAgIDogI2ZmZGY3ZjtcclxuXHRcdGNvbG9yICAgICAgICA6ICMwMDAwMDA7XHJcblx0XHRtYXJnaW4gICAgICAgOiAwIDFlbTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcbn1cclxuXHJcbi5wb3N0c3tcclxuXHQucG9zdENvbnRhaW5lcntcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdG1hcmdpbjogMTBweCAwIDtcclxuXHRcdC5pbWdDb250YWluZXJ7XHJcblx0XHRcdG1pbi1oZWlnaHQgICAgICAgICA6IDI1MHB4O1xyXG5cdFx0XHRoZWlnaHQgICAgICAgICAgICAgOiBhdXRvO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLXJlcGVhdCAgOiBuby1yZXBlYXQ7XHJcblx0XHRcdGJhY2tncm91bmQtc2l6ZSAgICA6IGNvdmVyO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHR9XHJcblx0XHQuaWNvbl9fZmxvYXR7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRsaW5lLWhlaWdodDogMTNweDtcclxuXHRcdFx0aS5mYXtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC52aWV3c3tcclxuXHRcdFx0bGVmdDogMTAlO1xyXG5cdFx0XHRib3R0b206ICAyMCUgO1xyXG5cdFx0fVxyXG5cdFx0Lmxpa2Vze1xyXG5cdFx0XHRsZWZ0OiAxMCU7XHJcblx0XHRcdGJvdHRvbTogMTAlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmhlYWRpbmdze1xyXG5cdFx0YXtcclxuXHRcdCAgICBmb250LXNpemU6IDI0cHg7XHJcblx0XHQgICAgcGFkZGluZzogNXB4IDMwcHg7XHJcblx0XHQgICAgJi5hY3RpdmV7XHJcblx0XHQgICAgXHRib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmYmYwMDtcclxuXHRcdCAgICB9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4udHJlbmRze1xyXG5cdGRpdntcclxuXHRcdG1hcmdpbjogMGVtIDFlbSA7XHJcblx0fVxyXG5cdGgye1xyXG5cdFx0Zm9udC1zaXplOiAzNHB4O1xyXG5cdH1cclxufVxyXG5cclxuLnBvc3RzICwgLnRyZW5kc3tcclxuXHRtYXJnaW46IDFlbTtcclxufVxyXG5cclxuXHJcblxyXG4vLy9SZXNwb25zaXZlXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xyXG5cdC5jb250YWluZXIge1xyXG5cdCAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuXHQuY29udGFpbmVyIHtcclxuICAgXHRcdCBtYXgtd2lkdGg6IDU0MHB4O1xyXG4gICBcdFx0IG1hcmdpbjogMWVtO1xyXG5cdH1cclxuXHJcblx0LmNvbHVtbi01MHtcclxuXHRcdGZsZXggICAgICAgICA6IDAgMCA0MyU7XHJcblx0XHRtYXgtd2lkdGggICAgOiA0MyU7XHJcblx0fVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'kofluence';
        this.items = [
            {
                "display": "#sandals",
                "value": "#sandals"
            },
            {
                "display": "#shoes",
                "value": "#shoes"
            }
        ];
        this.searchSuggestions = [
            {
                "hashtag": "flatshoes",
                "posts": "16k"
            },
            {
                "hashtag": "heels",
                "posts": "5k"
            },
            {
                "hashtag": "redshoes",
                "posts": "6k"
            },
            {
                "hashtag": "sportshoes",
                "posts": "1k"
            }
        ];
        this.posts = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getPostsData();
    };
    AppComponent.prototype.getPostsData = function () {
        var _this = this;
        this.http.get("http://localhost:4200/assets/data.json", { responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }))
            .subscribe(function (res) {
            _this.posts = res.content;
            console.log(_this.posts);
            console.log(res);
        });
    };
    AppComponent.prototype.onNewSearch = function (e) {
        console.log(e);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors */ "./src/app/interceptors/index.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");







 // this is needed!


//Interceptor


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_8__["TagInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors__WEBPACK_IMPORTED_MODULE_9__["MainInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/interceptors/error.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(_router) {
        this._router = _router;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            console.log(err);
            var error = err.error.message || err.statusText || err["message"];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/interceptors/http.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/interceptors/http.interceptor.ts ***!
  \**************************************************/
/*! exports provided: MainInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainInterceptor", function() { return MainInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainInterceptor = /** @class */ (function () {
    function MainInterceptor() {
    }
    MainInterceptor.prototype.intercept = function (request, next) {
        // const headersConfig = {
        //   'Accept': 'application/json' 
        // };
        // headersConfig["Content-Type"] = `application/json` ;
        // // console.log(request);
        // request = request.clone({
        //         setHeaders: headersConfig
        // });
        return next.handle(request);
    };
    MainInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainInterceptor);
    return MainInterceptor;
}());



/***/ }),

/***/ "./src/app/interceptors/index.ts":
/*!***************************************!*\
  !*** ./src/app/interceptors/index.ts ***!
  \***************************************/
/*! exports provided: ErrorInterceptor, MainInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/interceptors/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.interceptor */ "./src/app/interceptors/http.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainInterceptor", function() { return _http_interceptor__WEBPACK_IMPORTED_MODULE_1__["MainInterceptor"]; });





/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\t<section>\n\t\t<div class=\"headerItem\">\n\t\t\t<a>\n\t\t\t\t<span class=\"fa fa-arrow-left fa-2x\"></span>\n\t\t\t</a>\n\t\t\t<a>\n\t\t\t\t<span class=\"fa fa-question fa-2x\"></span>\n\t\t\t</a>\n\t\t</div>\n\t</section>\n</header>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: black;\n  height: 55px;\n  display: block;\n  width: 100%; }\n  header .headerItem {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px; }\n  header .headerItem a {\n      color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9EOlxcQ29kZV8yXFxQcm9qZWN0XFxrb2ZsdWVuY2Uvc3JjXFxhcHBcXHNoYXJlZFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBaUI7RUFDakIsYUFBZ0I7RUFDaEIsZUFBaUI7RUFDakIsWUFBaUIsRUFVakI7RUFkRDtJQU9FLGNBQXFCO0lBQ3JCLCtCQUE4QjtJQUM5QixjQUFxQixFQUlyQjtFQWJGO01BV0csYUFBWSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XHJcblx0YmFja2dyb3VuZDogYmxhY2s7XHJcblx0aGVpZ2h0ICAgIDogNTVweDtcclxuXHRkaXNwbGF5ICAgOiBibG9jaztcclxuXHR3aWR0aCAgICAgOiAxMDAlIDtcclxuXHJcblx0LmhlYWRlckl0ZW0ge1xyXG5cdFx0ZGlzcGxheSAgICAgICAgOiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0cGFkZGluZyAgICAgICAgOiAxMHB4O1xyXG5cdFx0YXtcclxuXHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Code_2\Project\kofluence\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map