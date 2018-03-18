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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/Auth/auth.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
        auth.handleAuthentication();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
var collaboration_service_1 = __webpack_require__("../../../../../src/app/services/Collaboration/collaboration.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/Auth/auth.service.ts");
var app_routes_1 = __webpack_require__("../../../../../src/app/app.routes.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var problem_list_component_1 = __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.ts");
var problem_detail_component_1 = __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.ts");
var new_problem_component_1 = __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.ts");
var navbar_component_1 = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
var editor_component_1 = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
var user_profile_component_1 = __webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.ts");
var loading_component_1 = __webpack_require__("../../../../../src/app/components/loading/loading.component.ts");
var curser_list_component_1 = __webpack_require__("../../../../../src/app/components/curser-list/curser-list.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                problem_list_component_1.ProblemListComponent,
                problem_detail_component_1.ProblemDetailComponent,
                new_problem_component_1.NewProblemComponent,
                navbar_component_1.NavbarComponent,
                editor_component_1.EditorComponent,
                user_profile_component_1.UserProfileComponent,
                loading_component_1.LoadingComponent,
                curser_list_component_1.CurserListComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.Routing,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [
                data_service_1.DataService,
                collaboration_service_1.CollaborationService,
                auth_service_1.AuthService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var problem_list_component_1 = __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.ts");
var loading_component_1 = __webpack_require__("../../../../../src/app/components/loading/loading.component.ts");
var user_profile_component_1 = __webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.ts");
var editor_component_1 = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
var routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        component: user_profile_component_1.UserProfileComponent
    },
    {
        path: 'callback',
        component: loading_component_1.LoadingComponent
    },
    {
        path: 'problems',
        component: problem_list_component_1.ProblemListComponent
    },
    {
        path: 'problems/difficulty/:diff',
        component: problem_list_component_1.ProblemListComponent
    },
    {
        path: 'problems/keywords/:keywords',
        component: problem_list_component_1.ProblemListComponent
    },
    {
        path: 'problems/:id',
        component: editor_component_1.EditorComponent
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];
exports.Routing = router_1.RouterModule.forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/components/curser-list/curser-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/curser-list/curser-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-xs-12 col-md-4\">\n    curser list:\n    <div class=\"list-group\">\n        <a class=\"list-group-item\" *ngFor=\"let curser of cursersList\">\n          <strong class=\"title\">{{curser.id}}. {{curser.color}}</strong>\n        </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/curser-list/curser-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var collaboration_service_1 = __webpack_require__("../../../../../src/app/services/Collaboration/collaboration.service.ts");
var CurserListComponent = /** @class */ (function () {
    function CurserListComponent(collaboration) {
        this.collaboration = collaboration;
    }
    CurserListComponent.prototype.ngOnInit = function () {
        this.init();
        console.log('curser list: ' + this.curserList);
    };
    CurserListComponent.prototype.init = function () {
        // this.collaboration.getCursers()
        // .subscribe(cursers => this.curserList = cursers);
    };
    CurserListComponent = __decorate([
        core_1.Component({
            selector: 'app-curser-list',
            template: __webpack_require__("../../../../../src/app/components/curser-list/curser-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/curser-list/curser-list.component.css")]
        }),
        __metadata("design:paramtypes", [collaboration_service_1.CollaborationService])
    ], CurserListComponent);
    return CurserListComponent;
}());
exports.CurserListComponent = CurserListComponent;


/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen {\n    .vbox {\n      height: 100%;\n    }\n    .vnav {\n      color:#a7afbd;\n    }\n    #editor {\n      height: 600px;\n      width: 760px;\n    }\n    .lang-select {\n      width: 100px;\n      margin-right: 10px;\n    }\n    header .btn {\n      margin: 0 5px;\n    }\n    footer .btn {\n      margin: 0 5px;\n    }\n    .editor-footer, .editor-header {\n      margin: 10px 0;\n    }\n    .cursor {\n      /*position:absolute;*/\n      background: rgba(0, 250, 0, 0.5);\n      z-index: 40;\n      width: 2px !important;\n    }\n    .color0000ff {\n      background-color: #0000ff\n    }\n    .colora52a2a {\n      background-color: #a52a2a\n    }\n    .color00ffff {\n      background-color: #00ffff\n    }\n    .color00008b {\n      background-color: #00008b\n    }\n    .color008b8b {\n      background-color: #008b8b\n    }\n    .colora9a9a9{ background-color: #a9a9a9 }\n    .color006400{ background-color: #006400 }\n    .colorbdb76b{ background-color: #bdb76b }\n    .color8b008b{ background-color: #8b008b }\n    .color556b2f{ background-color: #556b2f }\n    .colorff8c00{ background-color: #ff8c00 }\n    .color9932cc{ background-color: #9932cc }\n    .color8b0000{ background-color: #8b0000 }\n    .colore9967a{ background-color: #e9967a }\n    .color9400d3{ background-color: #9400d3 }\n    .colorff00ff{ background-color: #ff00ff }\n    .colorffd700{ background-color: #ffd700 }\n    .color008000{ background-color: #008000 }\n    .color4b0082{ background-color: #4b0082 }\n    .colorf0e68c{ background-color: #f0e68c }\n    .coloradd8e6{ background-color: #add8e6 }\n    .colore0ffff{ background-color: #e0ffff }\n    .color90ee90{ background-color: #90ee90 }\n    .colord3d3d3{ background-color: #d3d3d3 }\n    .colorffb6c1{ background-color: #ffb6c1 }\n    .colorffffe0{ background-color: #ffffe0 }\n    .color00ff00{ background-color: #00ff00 }\n    .colorff00ff{ background-color: #ff00ff }\n    .color800000{ background-color: #800000 }\n    .color000080{ background-color: #000080 }\n    .color808000{ background-color: #808000 }\n    .colorffa500{ background-color: #ffa500 }\n    .colorffc0cb{ background-color: #ffc0cb }\n    .color800080{ background-color: #800080 }\n    .color800080{ background-color: #800080 }\n    .colorff0000{ background-color: #ff0000 }\n    .colorc0c0c0{ background-color: #c0c0c0 }\n    .colorffffff{ background-color: #ffffff }\n    .colorffff00{ background-color: #ffff00 } \n    \n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n<!-- <div class=\"vbox hidden-xs col-md-1\" style=\"height:100vh;padding-left: 0px;padding-right: 0px; background-color:#4c5566\">\n  <ul class=\"nav nav-pills nav-stacked\" style=\"padding-left: 0px;padding-right: 0px;\">\n    <li style=\"height:70px\">\n      <a href=\"\" style=\"text-align:center;position:relative;color:#a7afbd;font-weight:700;\">Problem</a>\n    </li>\n    <li style=\"height:70px\">\n      <a href=\"\" >Problem</a>\n    </li>\n    <li></li>\n  </ul>\n</div> -->\n  <div class=\"col-xs-12 col-md-4\" style=\"margin-left: 30px;margin-right: 50px;\">\n    <h3>{{problem.id}}. {{problem.name}}</h3>\n      <ul class=\"nav nav-tabs\" style=\"margin-bottom: 20px;\">\n          <li role=\"presentation\" class=\"active\"><a data-toggle=\"tab\" href=\"#discription\">Desciption</a></li>\n\n          <li role=\"presentation\"><a data-toggle=\"tab\" href=\"#output\">Output</a></li>\n          <li role=\"presentation\"><a data-toggle=\"tab\" href=\"#coders\">Coders</a></li>\n        </ul>\n    <div class=\"tab-content\">\n        <div id=\"discription\" class=\"tab-pane fade in active\">\n            <app-problem-detail></app-problem-detail>\n        </div>\n        <div id=\"output\" class=\"tab-pane fade\">\n            <p style=\"color:#92cf5c; font-size:18px\">Compiled</p>\n            <strong style=\"font-weight: bold\">Your output</strong>\n            <div class=\"well well-sm\">your output</div>\n        </div>\n        <div id=\"coders\" class=\"tab-pane fade well well-sm\">\n          <div *ngIf=\"keys.length==0\">There is no coder.</div>\n            <ul *ngFor=\"let key of keys\" style=\"padding-left: 0px;\">\n                \n                <li class=\"list-group-item\">\n                  <span class=\"{{'badge ' + cursorList[key].color}}\">:)</span> {{cursorList[key].name}}\n            </li>\n            </ul> \n        </div>\n    </div>\n    <!-- <div class=\"panel panel-primary\">\n        <div class=\"panel-body\" style=\"background-color: #D3E1EC\">\n            <h3 style=\" color:#454597; margin-top: 0px;margin-bottom: 0px;\">Coders:</h3>\n        </div>\n        <div class=\"panel-footer\">\n            <p *ngIf=\"keys.length==0\">There is no coder...</p>\n            \n        </div>\n      </div> -->\n     \n  </div>\n  \n  <div class=\"hidden-xs col-sm-12 col-md-7 panel panel-default\" \n    style=\"padding-left: 0px;padding-right: 0px; background-color:#D3E1EC;width:auto\">\n            <!-- Modal -->\n            <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n              <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Are you sure</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                    You will lose current code in the editor, are you sure?\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n                    (click)=\"resetEditor()\">Reset</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div id=\"editor\" >\n            </div>\n\n          <!-- This is the body -->\n          \n              <div class=\"panel-body\" style=\"padding-top: 10px;padding-bottom: 10px;padding-left: 15px;\">\n              <select class=\"form-control pull-left lang-select\" name=\"language\"\n              [(ngModel)]=\"language\" (change)=\"setLanguage(language)\">\n              <option *ngFor=\"let language of languages\" [value]=\"language\">\n                {{language}}\n              </option>\n             </select>\n             <!--reset button -->\n             <!-- Button trigger modal -->\n             <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n               Reset\n             </button>\n              <button type=\"button\" class=\"btn btn-success pull-right\" \n              (click)=\"submit()\">Submit Solution</button>\n        </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var collaboration_service_1 = __webpack_require__("../../../../../src/app/services/Collaboration/collaboration.service.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/Auth/auth.service.ts");
var EditorComponent = /** @class */ (function () {
    function EditorComponent(collaboration, route, data, auth) {
        this.collaboration = collaboration;
        this.route = route;
        this.data = data;
        this.auth = auth;
        this.language = 'Java';
        this.languages = ['Java', 'Python'];
        this.output = '';
        this.defaultContent = {
            'Java': "public class Example {\n public static void main(String[] args) {\n     // Type your Java code here\n }\n}",
            'Python': "class Solution:\n   def example():\n       # Write your Python code here"
        };
        this.keys = [];
        this.profile = {
            sub: 'not-log-in',
            nickname: 'Visitor'
        };
        this.username = "username";
        this.problem = {};
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            if (this.auth.userProfile) {
                console.log("fetched");
                this.profile = this.auth.userProfile;
                this.username = this.profile["nickname"];
            }
            else {
                //this.getProfile();
                this.auth.getProfile(function (err, profile) {
                    if (profile) {
                        _this.profile = profile;
                        _this.username = _this.profile["nickname"];
                    }
                    if (err)
                        console.log("fetched failed");
                });
            }
        }
        this.route.params
            .subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.initEditor();
            _this.data.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
        });
        // this.collaboration._curserSource.asObservable().subscribe(
        //   cursorList => JSON.stringify(cursorList)
        // );
        //console.log("username: " + this.profile["nickname"])
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit('editor');
        this.editor.setTheme('ace/theme/eclipse');
        this.editor.$blockScrolling = Infinity;
        this.resetEditor();
        this.collaboration.init(this.sessionId, this.editor, this.cursorInfo);
        this.editor.lastAppliedChange = null;
        // regist change callbacks
        this.editor.on('change', function (e) {
            console.log('editor changes: ' + JSON.stringify(e));
            if (_this.editor.lastAppliedChange != e) {
                e['subId'] = _this.profile["sub"];
                e['nickname'] = _this.profile["nickname"];
                _this.collaboration.change(JSON.stringify(e));
            }
        });
        this.editor.getSession().getSelection().on('changeCursor', function () {
            var cursor = _this.editor.getSession().getSelection().getCursor();
            console.log('cursor log from client ' + JSON.stringify(cursor));
            cursor["subId"] = _this.profile["sub"];
            cursor["nickname"] = _this.profile["nickname"];
            _this.collaboration.cursorMove(JSON.stringify(cursor));
            //this.cursorList = this.collaboration.clientsInfo;
            _this.cursorList = _this.collaboration.cursorsInfo;
            _this.keys = Object.keys(_this.cursorList);
            //console.log(this.collaboration.cursorsInfo);
            _this.cursorInfo = JSON.stringify(_this.cursorList);
        });
        this.collaboration.restoreBuffer();
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.setValue(this.defaultContent[this.language]);
        this.editor.getSession().setMode('ace/mode/' + this.language.toLowerCase());
        this.output = '';
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.submit = function () {
        var _this = this;
        var userCodes = this.editor.getValue();
        //console.log(userCodes);
        var data = {
            userCodes: userCodes,
            lang: this.language.toLowerCase()
        };
        this.data.buildAndRun(data)
            .then(function (res) { return _this.output = res.text; });
    };
    EditorComponent.prototype.updateCursorList = function () {
    };
    EditorComponent = __decorate([
        core_1.Component({
            selector: 'app-editor',
            template: __webpack_require__("../../../../../src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [collaboration_service_1.CollaborationService,
            router_1.ActivatedRoute,
            data_service_1.DataService,
            auth_service_1.AuthService])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;


/***/ }),

/***/ "../../../../../src/app/components/loading/loading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/loading/loading.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/Auth/auth.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoadingComponent.prototype.ngOnInit = function () {
        //this.redirect();
    };
    LoadingComponent.prototype.redirect = function () {
        if (this.authService.isAuthenticated())
            this.router.navigate(['/problems']);
    };
    LoadingComponent = __decorate([
        core_1.Component({
            selector: 'app-loading',
            template: __webpack_require__("../../../../../src/app/components/loading/loading.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], LoadingComponent);
    return LoadingComponent;
}());
exports.LoadingComponent = LoadingComponent;


/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-brand:hover {\n    color: white;\n}\n\n#dropdown:hover {\n    color:white;\n}\n\n#user:hover{\n    color:white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<script type=\"text/javascript\" src=\"node_modules/auth0-js/build/auth0.js\"></script>\n<div>\n    <nav class=\"navbar navbar-default\" style=\"border-spacing:0px;margin-bottom: 0px; background-color: #2c3039\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n      </div>\n  \n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\">\n          <!-- <li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li>\n          <li><a href=\"#\">Favorite</a></li> -->\n          <li class=\"dropdown\">\n            <a id=\"dropdown\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Difficulty <span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a [routerLink]=\"['/problems']\">All</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a [routerLink]=\"['/problems/difficulty/easy']\">Easy</a></li>\n              <li><a [routerLink]=\"['/problems/difficulty/medium']\">Medium</a></li>\n              <li><a [routerLink]=\"['/problems/difficulty/hard']\">Hard</a></li>\n              <li><a [routerLink]=\"['/problems/difficulty/super']\">Super</a></li>\n            </ul>\n          </li>\n        </ul>\n        <form class=\"navbar-form navbar-left\">\n          <div class=\"form-group\">\n            <input name=\"keywords\" id=\"keywords\" type=\"text\" class=\"form-control\"\n             placeholder=\"Keywords...\"\n             [(ngModel)] = \"keywords\"\n             >\n          </div>\n          <button type=\"submit\" class=\"btn btn-default\" (click)=\"searchProblem()\">Search</button>\n        </form>\n      \n        <ul class=\"nav navbar-nav navbar-right\">\n          <!-- <li><a (click)=\"login()\">Login</a></li> -->\n          <li class=\"dropdown\">\n            <a id=\"user\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{username}}<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a [routerLink]=\"['/profile']\">Profile</a></li>\n              <li *ngIf = \"!authService.isAuthenticated()\"><a (click) = \"login()\">Log in</a></li>\n              <li *ngIf = \"authService.isAuthenticated()\"><a (click) = \"logout()\">Log out</a></li>\n              <!-- <li><a href=\"#\">Something else here</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a href=\"#\">Log Out</a></li> -->\n            </ul>\n          </li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/Auth/auth.service.ts");
var NavbarComponent = /** @class */ (function () {
    //router: Router;
    function NavbarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = "Coder Space";
        this.username = "user";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.isAuthenticated) {
            if (this.authService.userProfile) {
                this.profile = this.authService.userProfile;
                this.username = this.profile["nickname"];
            }
            else {
                this.authService.getProfile(function (err, profile) {
                    _this.profile = profile;
                    _this.username = _this.profile["nickname"];
                });
            }
        }
        else {
            this.username = "User";
        }
    };
    NavbarComponent.prototype.searchProblem = function () {
        //alert(this.keywords);
        console.log(this.keywords);
        if (this.keywords)
            this.router.navigate(['/problems/keywords', this.keywords]);
        else
            this.router.navigate(['/problems']);
    };
    NavbarComponent.prototype.login = function () {
        this.authService.login();
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.username = "user";
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form #formRef = \"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"problemName\">Problem name</label>\n        <input name = \"problemName\" id=\"problemName\" class=\"form-control\"\n          type=\"text\" required placeholder=\"Please enter problem name\" \n          [(ngModel)] = \"newProblem.name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"problemDesc\">problem description</label>\n        <textarea name = \"problemDesc\" id=\"problemDesc\" class=\"form-control\"\n         placeholder=\"Please enter problem description\" \n          [(ngModel)] = \"newProblem.desc\" rows=\"3\">\n        </textarea>\n      </div>\n      <div class=\"form-group\">\n         <label for=\"problemDifficulty\">Difficulty</label> \n         <select class=\"form-control\" id=\"difficulty\" name=\"difficulty\"\n         [(ngModel)] = \"newProblem.difficulty\">\n          <option *ngFor = \"let difficulty of difficulties\" [value] = \"difficulty\">\n            {{difficulty}}\n          </option>\n         </select>\n      </div>\n      <div class=\"row\">\n        <div class = \"col-md-12\">\n          <button type=\"submit\" class=\"btn btn-primary pull-right\"\n            (click) = \"addProblem()\"\n          > Add Problem </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <br/>\n  <br/>"

/***/ }),

/***/ "../../../../../src/app/components/new-problem/new-problem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: '',
    desc: '',
    difficulty: 'easy'
});
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(dataService) {
        this.dataService = dataService;
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
        this.difficulties = ['easy', 'medium', 'hard', 'super'];
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.dataService.addProblem(this.newProblem)
            .catch(function (error) { return console.log(error); });
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    NewProblemComponent = __decorate([
        core_1.Component({
            selector: 'app-new-problem',
            template: __webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/new-problem/new-problem.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], NewProblemComponent);
    return NewProblemComponent;
}());
exports.NewProblemComponent = NewProblemComponent;


/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar> -->\n<!-- <app-curser-list></app-curser-list> -->\n<!-- <div *ngIf = \"problem\"> -->\n    <!-- <div class=\"col-xs-12 col-md-4\"> -->\n      <!-- <h2>\n        {{problem.id}}. {{problem.name}}\n      </h2>\n      <p style=\"margin-bottom: 50px;\">\n        {{problem.desc}}\n      </p> -->\n  \n    <!-- </div> -->\n    \n    <!-- <div class=\"hidden-xs col-sm-12 col-md-8\">\n      <app-editor></app-editor>\n    </div> -->\n<!-- </div> -->\n<div class=\"panel panel-default\">\n    <div class=\"panel-body well well-sm\" style=\"margin-bottom: 0px;\">\n        {{problem.desc}}\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/problem-detail/problem-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var problem_model_1 = __webpack_require__("../../../../../src/app/models/problem.model.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
var ProblemDetailComponent = /** @class */ (function () {
    function ProblemDetailComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.problem = new problem_model_1.Problem();
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dataService.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    ProblemDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-detail',
            template: __webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            data_service_1.DataService])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());
exports.ProblemDetailComponent = ProblemDetailComponent;


/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".difficulty {\n    min-width: 65px;\n    margin-right: 10px;\n  }\n  \n  .label.difficulty {\n    padding-top: 0.6em;\n    color: #fbfdfa;\n    font-size: 12px;\n  }\n  \n  .title {\n    font-size: 1.2em;\n  }\n  \n  .diff-easy {\n    background-color: #42ebf4;\n  }\n  \n  .diff-medium {\n    background-color: #92cf5c;\n  }\n  \n  .diff-hard {\n    background-color: #dd0d1e;\n  }\n  \n  .diff-super {\n    background-color: #8d16e2;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\" style=\"margin-top:10px\">\n  <app-new-problem></app-new-problem>\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let problem of problems\"\n      [routerLink]=\"['/problems', problem.id]\">\n      <span \n      class=\"{{'pull-left label difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">\n        {{problem.difficulty}}\n      </span>\n      <strong class=\"title\">{{problem.id}}. {{problem.name}}</strong>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/problem-list/problem-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js"); // add ngOnDestroy
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data/data.service.ts");
var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    //add unsubscribe in ngOnDestroy
    ProblemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['diff']) {
                _this.dataService.getProblemsByDiff(params['diff'])
                    .then(function (problems) { return _this.problems = problems; });
            }
            else if (params['keywords']) {
                _this.dataService.searchProblems(params['keywords'])
                    .then(function (problems) { return _this.problems = problems; });
            }
            else {
                _this.getProblems();
            }
        });
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        // this.problems = this.dataService.getProblems();
        this.dataService.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-list',
            template: __webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/problem-list/problem-list.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            data_service_1.DataService])
    ], ProblemListComponent);
    return ProblemListComponent;
}());
exports.ProblemListComponent = ProblemListComponent;


/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"panel panel-default profile-area\">\n  <div class=\"panel-heading\">\n    <h3>Profile</h3>\n  </div>\n  <div class=\"panel-body\">\n    <img src=\"{{profile?.picture}}\" class=\"avatar\" alt=\"avatar\">\n    <div>\n      <label><i class=\"glyphicon glyphicon-user\"></i> Nickname</label>\n      <h3 class=\"nickname\">{{ profile?.nickname }}</h3>\n    </div>\n    <pre class=\"full-profile\">{{ profile | json }}</pre>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// src/app/profile/profile.component.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/Auth/auth.service.ts");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(auth) {
        this.auth = auth;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        //if ( this.auth.isAuthenticated() ) console.log('login successfully.');
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            //this.getProfile();
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
            });
        }
    };
    UserProfileComponent.prototype.getProfile = function () {
        var _this = this;
        // this.problems = this.dataService.getProblems();
        this.auth.getProfiles()
            .subscribe(function (profile) { return _this.profile = profile; });
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;


/***/ }),

/***/ "../../../../../src/app/models/problem.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Problem = /** @class */ (function () {
    function Problem() {
    }
    return Problem;
}());
exports.Problem = Problem;


/***/ }),

/***/ "../../../../../src/app/services/Auth/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var auth0 = __webpack_require__("../../../../auth0-js/src/index.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new auth0.WebAuth({
            clientID: 'CbrHmOyOxkeFTQjpw3nbHEg5vY4RGR4s',
            domain: 'wenzx94.auth0.com',
            responseType: 'token id_token',
            audience: 'https://wenzx94.auth0.com/userinfo',
            redirectUri: 'http://localhost:3000/callback',
            scope: 'openid profile'
        });
        this._profileSource = new BehaviorSubject_1.BehaviorSubject([]);
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.setSession(authResult);
                _this.router.navigate(['/problems']);
            }
            else if (err) {
                _this.router.navigate(['/problems']);
                console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access Token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    AuthService.prototype.getProfiles = function () {
        var _this = this;
        // return this.problems;
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access Token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken).toPromise()
            .then(function (profile) {
            _this._profileSource.next(profile);
        });
        return this._profileSource.asObservable();
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "../../../../../src/app/services/Collaboration/collaboration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var colors_1 = __webpack_require__("../../../../../src/assets/colors.ts");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
var CollaborationService = /** @class */ (function () {
    function CollaborationService() {
        this.clientsInfo = {};
        this.cursorsInfo = {};
        this.clientNum = 0;
        this._curserSource = new BehaviorSubject_1.BehaviorSubject([]);
    }
    // init(): void {
    //   this.collaborationSocket = io(window.location.origin, { query: 'message=' +'hahahaha'});
    //   this.collaborationSocket.on('message', (message) => {
    //     console.log('message received from server: ' + message);
    //   });
    // }
    CollaborationService.prototype.init = function (sessionId, editor, cursorInfo) {
        var _this = this;
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId });
        // listeners
        //Cursor List(add on Mar 10)
        // this.collaborationSocket.on('addToList', (newClientId: string) => {
        //   if ( !(newClientId in this.clientsInfo)) {
        //     console.log('new client comes in: ' + newClientId);
        //   }
        // });
        this.collaborationSocket.on('change', function (delta) {
            console.log('collabration from server : editor changes by ' + delta);
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
        this.collaborationSocket.on('cursorMove', function (cursor) {
            console.log('cursor move:' + cursor);
            var session = editor.getSession();
            cursor = JSON.parse(cursor);
            var x = cursor['row'];
            var y = cursor['column'];
            var changeClientId = cursor['socketId'];
            var nickname = cursor['nickname'];
            if (changeClientId in _this.clientsInfo) {
                session.removeMarker(_this.clientsInfo[changeClientId]['marker']);
            }
            else {
                _this.clientsInfo[changeClientId] = {};
                var css = document.createElement('style');
                css.type = 'text/css';
                css.innerHTML = ".editor_cursor_" + changeClientId + "\n                        { \n                          position:absolute;\n                          background-color:" + colors_1.COLORS[_this.clientNum] + ";\n                          z-index:100;\n                          width:3px !important;\n                        }";
                document.body.appendChild(css);
                // var newCurser: Cursor = Object.assign({
                //   id: changeClientId,
                //   color: COLORS[this.clientNum]
                // });
                //this.cursorsInfo.push(new Cursor(newCurser));
                _this.cursorsInfo[_this.clientNum] = {};
                _this.cursorsInfo[_this.clientNum]['name'] = nickname;
                _this.cursorsInfo[_this.clientNum]['color'] = 'color' + colors_1.COLORS[_this.clientNum].substring(1);
                // if (this.cursorsInfo[nickname]) {
                //   this.cursorsInfo[nickname]['num']++;
                // } else this.cursorsInfo[nickname] = {};
                // this.cursorsInfo[nickname]['color'] = 
                //cursorInfo = JSON.stringify(this.cursorsInfo);
                //this.updateCursorList(this.cursorsInfo);
                _this._curserSource.next(_this.cursorsInfo);
                _this.clientNum++;
            }
            var Range = ace.require('ace/range').Range;
            var newMarker = session.addMarker(new Range(x, y, x, y + 1), "editor_cursor_" + changeClientId, true);
            _this.clientsInfo[changeClientId]['marker'] = newMarker;
            //this.cursorsInfo[changeClientId]['color'] = COLORS[this.clientNum];
            console.log(_this.cursorsInfo);
        });
    };
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit('change', delta);
    };
    CollaborationService.prototype.cursorMove = function (cursor) {
        this.collaborationSocket.emit('cursorMove', cursor);
    };
    CollaborationService.prototype.restoreBuffer = function () {
        this.collaborationSocket.emit('restoreBuffer');
    };
    CollaborationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CollaborationService);
    return CollaborationService;
}());
exports.CollaborationService = CollaborationService;


/***/ }),

/***/ "../../../../../src/app/services/data/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
// import { PROBLEMS } from '../../mock-problems';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        // problems: Problem[] = PROBLEMS;
        this._problemSource = new BehaviorSubject_1.BehaviorSubject([]);
    }
    DataService.prototype.getProblems = function () {
        var _this = this;
        // return this.problems;
        this.http.get('api/v1/problems')
            .toPromise()
            .then(function (res) {
            _this._problemSource.next(res);
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    DataService.prototype.getProblemsByDiff = function (difficulty) {
        return this.http.get("api/v1/problems/difficulty/" + difficulty)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    DataService.prototype.getProblem = function (id) {
        return this.http.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    DataService.prototype.searchProblems = function (keywords) {
        return this.http.get("api/v1/problems/keywords/" + keywords)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        var headers = new http_1.HttpHeaders().set('content-type', 'application/json');
        return this.http.post('api/v1/problems', problem, { headers: headers })
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.body || error);
    };
    DataService.prototype.buildAndRun = function (data) {
        var headers = new http_1.HttpHeaders().set('content-type', 'application/json');
        return this.http.post('/api/v1/build_and_run', data, { headers: headers })
            .toPromise()
            .then(function (res) {
            console.log(res);
            return res;
        })
            .catch(this.handleError);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "../../../../../src/assets/colors.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.COLORS = [
    "#0000ff",
    "#a52a2a",
    "#00ffff",
    "#00008b",
    "#008b8b",
    "#a9a9a9",
    "#006400",
    "#bdb76b",
    "#8b008b",
    "#556b2f",
    "#ff8c00",
    "#9932cc",
    "#8b0000",
    "#e9967a",
    "#9400d3",
    "#ff00ff",
    "#ffd700",
    "#008000",
    "#4b0082",
    "#f0e68c",
    "#add8e6",
    "#e0ffff",
    "#90ee90",
    "#d3d3d3",
    "#ffb6c1",
    "#ffffe0",
    "#00ff00",
    "#ff00ff",
    "#800000",
    "#000080",
    "#808000",
    "#ffa500",
    "#ffc0cb",
    "#800080",
    "#800080",
    "#ff0000",
    "#c0c0c0",
    "#ffffff",
    "#ffff00"
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map