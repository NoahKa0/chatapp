(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_chat_chatgui_chatgui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chat/chatgui/chatgui.component */ "./src/app/components/chat/chatgui/chatgui.component.ts");







const routes = [
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: "register",
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    },
    {
        path: "chat",
        component: _components_chat_chatgui_chatgui_component__WEBPACK_IMPORTED_MODULE_4__["ChatguiComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'chatapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_chat_chatgui_chatgui_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chat/chatgui/chatgui.component */ "./src/app/components/chat/chatgui/chatgui.component.ts");
/* harmony import */ var _components_chat_chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chat/chatlist/chatlist.component */ "./src/app/components/chat/chatlist/chatlist.component.ts");
/* harmony import */ var _components_chat_chatbody_chatbody_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/chat/chatbody/chatbody.component */ "./src/app/components/chat/chatbody/chatbody.component.ts");
/* harmony import */ var _components_chat_chatinput_chatinput_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/chat/chatinput/chatinput.component */ "./src/app/components/chat/chatinput/chatinput.component.ts");
/* harmony import */ var _components_chat_chatmessage_chatmessage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/chat/chatmessage/chatmessage.component */ "./src/app/components/chat/chatmessage/chatmessage.component.ts");
/* harmony import */ var _components_chat_chatheader_chatheader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/chat/chatheader/chatheader.component */ "./src/app/components/chat/chatheader/chatheader.component.ts");
/* harmony import */ var _components_chat_chatmembers_chatmembers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/chat/chatmembers/chatmembers.component */ "./src/app/components/chat/chatmembers/chatmembers.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        _components_chat_chatgui_chatgui_component__WEBPACK_IMPORTED_MODULE_8__["ChatguiComponent"],
        _components_chat_chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_9__["ChatlistComponent"],
        _components_chat_chatbody_chatbody_component__WEBPACK_IMPORTED_MODULE_10__["ChatbodyComponent"],
        _components_chat_chatinput_chatinput_component__WEBPACK_IMPORTED_MODULE_11__["ChatinputComponent"],
        _components_chat_chatmessage_chatmessage_component__WEBPACK_IMPORTED_MODULE_12__["ChatmessageComponent"],
        _components_chat_chatheader_chatheader_component__WEBPACK_IMPORTED_MODULE_13__["ChatheaderComponent"],
        _components_chat_chatmembers_chatmembers_component__WEBPACK_IMPORTED_MODULE_14__["ChatmembersComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                    _components_chat_chatgui_chatgui_component__WEBPACK_IMPORTED_MODULE_8__["ChatguiComponent"],
                    _components_chat_chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_9__["ChatlistComponent"],
                    _components_chat_chatbody_chatbody_component__WEBPACK_IMPORTED_MODULE_10__["ChatbodyComponent"],
                    _components_chat_chatinput_chatinput_component__WEBPACK_IMPORTED_MODULE_11__["ChatinputComponent"],
                    _components_chat_chatmessage_chatmessage_component__WEBPACK_IMPORTED_MODULE_12__["ChatmessageComponent"],
                    _components_chat_chatheader_chatheader_component__WEBPACK_IMPORTED_MODULE_13__["ChatheaderComponent"],
                    _components_chat_chatmembers_chatmembers_component__WEBPACK_IMPORTED_MODULE_14__["ChatmembersComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/chat/chatbody/chatbody.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/chat/chatbody/chatbody.component.ts ***!
  \****************************************************************/
/*! exports provided: ChatbodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbodyComponent", function() { return ChatbodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _chatmessage_chatmessage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chatmessage/chatmessage.component */ "./src/app/components/chat/chatmessage/chatmessage.component.ts");




function ChatbodyComponent_app_chatmessage_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chatmessage", 2);
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", message_r1);
} }
class ChatbodyComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChatbodyComponent.ɵfac = function ChatbodyComponent_Factory(t) { return new (t || ChatbodyComponent)(); };
ChatbodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatbodyComponent, selectors: [["app-chatbody"]], inputs: { chatService: "chatService" }, decls: 2, vars: 1, consts: [[1, "chatbody"], [3, "message", 4, "ngFor", "ngForOf"], [3, "message"]], template: function ChatbodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatbodyComponent_app_chatmessage_1_Template, 1, 1, "app-chatmessage", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chatService.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _chatmessage_chatmessage_component__WEBPACK_IMPORTED_MODULE_2__["ChatmessageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0Ym9keS9jaGF0Ym9keS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatbodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatbody',
                templateUrl: './chatbody.component.html',
                styleUrls: ['./chatbody.component.css']
            }]
    }], function () { return []; }, { chatService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/chat/chatgui/chatgui.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/chat/chatgui/chatgui.component.ts ***!
  \**************************************************************/
/*! exports provided: ChatguiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatguiComponent", function() { return ChatguiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _chatheader_chatheader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chatheader/chatheader.component */ "./src/app/components/chat/chatheader/chatheader.component.ts");
/* harmony import */ var _chatbody_chatbody_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chatbody/chatbody.component */ "./src/app/components/chat/chatbody/chatbody.component.ts");
/* harmony import */ var _chatinput_chatinput_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chatinput/chatinput.component */ "./src/app/components/chat/chatinput/chatinput.component.ts");
/* harmony import */ var _chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chatlist/chatlist.component */ "./src/app/components/chat/chatlist/chatlist.component.ts");
/* harmony import */ var _chatmembers_chatmembers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chatmembers/chatmembers.component */ "./src/app/components/chat/chatmembers/chatmembers.component.ts");








class ChatguiComponent {
    constructor(chatService) {
        this.chatService = chatService;
    }
    ngOnInit() {
        this.chatService.setupSocket();
        this.chatService.authenticate();
    }
}
ChatguiComponent.ɵfac = function ChatguiComponent_Factory(t) { return new (t || ChatguiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"])); };
ChatguiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatguiComponent, selectors: [["app-chatgui"]], decls: 7, vars: 5, consts: [[1, "chat"], [3, "chatService"]], template: function ChatguiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-chatheader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-chatbody", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-chatinput", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-chatlist", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-chatmembers", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatService", ctx.chatService);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatService", ctx.chatService);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatService", ctx.chatService);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatService", ctx.chatService);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatService", ctx.chatService);
    } }, directives: [_chatheader_chatheader_component__WEBPACK_IMPORTED_MODULE_2__["ChatheaderComponent"], _chatbody_chatbody_component__WEBPACK_IMPORTED_MODULE_3__["ChatbodyComponent"], _chatinput_chatinput_component__WEBPACK_IMPORTED_MODULE_4__["ChatinputComponent"], _chatlist_chatlist_component__WEBPACK_IMPORTED_MODULE_5__["ChatlistComponent"], _chatmembers_chatmembers_component__WEBPACK_IMPORTED_MODULE_6__["ChatmembersComponent"]], styles: [".chat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #171d20;\n  background-image: url('chat-bg.svg');\n}\n\napp-chatbody[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column-reverse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXRndWkvY2hhdGd1aS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixvQ0FBOEQ7QUFDaEU7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdGd1aS9jaGF0Z3VpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxZDIwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2hhdC1iZy5zdmcnKTtcbn1cblxuYXBwLWNoYXRib2R5IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatguiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatgui',
                templateUrl: './chatgui.component.html',
                styleUrls: ['./chatgui.component.css']
            }]
    }], function () { return [{ type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/chat/chatheader/chatheader.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/chat/chatheader/chatheader.component.ts ***!
  \********************************************************************/
/*! exports provided: ChatheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatheaderComponent", function() { return ChatheaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class ChatheaderComponent {
    constructor() { }
    ngOnInit() {
        this.showError = false;
        this.errorMessage = "";
        this.chatService.errors.subscribe((error) => {
            this.showError = true;
            this.errorMessage = error;
            setTimeout(() => {
                this.showError = false;
            }, 10000);
        });
    }
    setClasses() {
        return {
            header: true,
            hidden: !this.chatService.isInChat() && !this.showError,
            error: this.showError
        };
    }
    showMembers() {
        this.chatService.refreshChats();
        this.chatService.showMembers = !this.chatService.showMembers;
    }
}
ChatheaderComponent.ɵfac = function ChatheaderComponent_Factory(t) { return new (t || ChatheaderComponent)(); };
ChatheaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatheaderComponent, selectors: [["app-chatheader"]], inputs: { chatService: "chatService" }, decls: 10, vars: 3, consts: [[3, "ngClass"], [1, "errors"], [1, "items"], [3, "click"]], template: function ChatheaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatheaderComponent_Template_button_click_4_listener() { return ctx.chatService.leaveChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatheaderComponent_Template_button_click_8_listener() { return ctx.showMembers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.chatService.chatName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["input[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 3px;\n  border: none;\n  font-size: 1em;\n}\n\ninput[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #1E2529;\n  color: white;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #003367;\n  color: white;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: #1E2529;\n  text-align: center;\n}\n\n.header[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  flex: 1;\n}\n\n.errors[_ngcontent-%COMP%] {\n  background-color: #EE5522;\n  color: white;\n  display: none;\n}\n\n.header.error[_ngcontent-%COMP%]   .errors[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NoYXQuY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdGhlYWRlci9jaGF0aGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQ2ZBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFlBQVk7RUFDWixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdGhlYWRlci9jaGF0aGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCwgYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDNweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuaW5wdXQge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyNTI5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDMzNjc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvY3NzL2NoYXQuY3NzXCI7XG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjUyOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYWRlciAuaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhlYWRlciBoMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxleDogMTtcbn1cblxuLmVycm9ycyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRTU1MjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlci5lcnJvciAuZXJyb3JzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatheaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatheader',
                templateUrl: './chatheader.component.html',
                styleUrls: ['./chatheader.component.css']
            }]
    }], function () { return []; }, { chatService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/chat/chatinput/chatinput.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/chat/chatinput/chatinput.component.ts ***!
  \******************************************************************/
/*! exports provided: ChatinputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatinputComponent", function() { return ChatinputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class ChatinputComponent {
    constructor() {
        this.message = '';
    }
    ngOnInit() {
    }
    sendMessage() {
        this.chatService.sendMessage(this.message);
        this.message = "";
    }
    messageKeyDown(event) {
        if (event.keyCode === 13) {
            this.sendMessage();
        }
    }
}
ChatinputComponent.ɵfac = function ChatinputComponent_Factory(t) { return new (t || ChatinputComponent)(); };
ChatinputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatinputComponent, selectors: [["app-chatinput"]], inputs: { chatService: "chatService" }, decls: 4, vars: 1, consts: [[1, "chatinput"], ["type", "text", "placeholder", "Message", 3, "ngModel", "ngModelChange", "keydown"], [3, "click"]], template: function ChatinputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatinputComponent_Template_input_ngModelChange_1_listener($event) { return ctx.message = $event; })("keydown", function ChatinputComponent_Template_input_keydown_1_listener($event) { return ctx.messageKeyDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatinputComponent_Template_button_click_2_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["input[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 3px;\n  border: none;\n  font-size: 1em;\n}\n\ninput[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #1E2529;\n  color: white;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #003367;\n  color: white;\n}\n\n.chatinput[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NoYXQuY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdGlucHV0L2NoYXRpbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLE9BQU87RUFDUCx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUNkQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1AsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXRpbnB1dC9jaGF0aW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LCBidXR0b24ge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5pbnB1dCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRTI1Mjk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzM2NztcbiAgY29sb3I6IHdoaXRlO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvY2hhdC5jc3NcIjtcblxuLmNoYXRpbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDhweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatinputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatinput',
                templateUrl: './chatinput.component.html',
                styleUrls: ['./chatinput.component.css']
            }]
    }], function () { return []; }, { chatService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/chat/chatlist/chatlist.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/chat/chatlist/chatlist.component.ts ***!
  \****************************************************************/
/*! exports provided: ChatlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatlistComponent", function() { return ChatlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function ChatlistComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatlistComponent_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const chat_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.joinChat(chat_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chat_r1.name, " ");
} }
class ChatlistComponent {
    constructor() { }
    ngOnInit() {
        this.chatname = "";
        this.chatService.refreshChats();
    }
    setClasses() {
        return {
            chatlist: true,
            hidden: this.chatService.isInChat()
        };
    }
    joinChat(id) {
        this.chatService.joinChat(id);
    }
    createChat() {
        this.chatService.createChat(this.chatname);
    }
}
ChatlistComponent.ɵfac = function ChatlistComponent_Factory(t) { return new (t || ChatlistComponent)(); };
ChatlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatlistComponent, selectors: [["app-chatlist"]], inputs: { chatService: "chatService" }, decls: 10, vars: 3, consts: [[3, "ngClass"], [1, "header"], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "body"], [4, "ngFor", "ngForOf"], [1, "buttons"], [1, "chat", 3, "click"]], template: function ChatlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatlistComponent_Template_input_ngModelChange_2_listener($event) { return ctx.chatname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatlistComponent_Template_button_click_3_listener() { return ctx.createChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create new chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatlistComponent_div_6_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatlistComponent_Template_button_click_8_listener() { return ctx.chatService.refreshChats(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.chatname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chatService.chats);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["input[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 3px;\n  border: none;\n  font-size: 1em;\n}\n\ninput[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #1E2529;\n  color: white;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #003367;\n  color: white;\n}\n\n.chatlist[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  background-color: #1E2529;\n  box-shadow: rgb(14, 17, 19) 1px 1px 5px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 5px;\n  background-color: #2F3133;\n  text-align: center;\n}\n\n.chat[_ngcontent-%COMP%] {\n  color: white;\n  padding: 10px;\n}\n\n.chat[_ngcontent-%COMP%]:hover {\n  padding: 10px;\n  background-color: #171D20;\n}\n\n.body[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NoYXQuY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdGxpc3QvY2hhdGxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FDZEE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0bGlzdC9jaGF0bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQsIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbmlucHV0IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjUyOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMzY3O1xuICBjb2xvcjogd2hpdGU7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9jaGF0LmNzc1wiO1xuXG4uY2hhdGxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyNTI5O1xuICBib3gtc2hhZG93OiByZ2IoMTQsIDE3LCAxOSkgMXB4IDFweCA1cHg7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyRjMxMzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNoYXQge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jaGF0OmhvdmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MUQyMDtcbn1cblxuLmJvZHkgLmJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatlist',
                templateUrl: './chatlist.component.html',
                styleUrls: ['./chatlist.component.css']
            }]
    }], function () { return []; }, { chatService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/chat/chatmembers/chatmembers.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/chat/chatmembers/chatmembers.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChatmembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatmembersComponent", function() { return ChatmembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ChatmembersComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r1.name, " ");
} }
class ChatmembersComponent {
    constructor() { }
    ngOnInit() {
    }
    setClasses() {
        return {
            chatmembers: true,
            hidden: !this.chatService.showMembers
        };
    }
    closeMembers() {
        this.chatService.showMembers = !this.chatService.showMembers;
    }
}
ChatmembersComponent.ɵfac = function ChatmembersComponent_Factory(t) { return new (t || ChatmembersComponent)(); };
ChatmembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatmembersComponent, selectors: [["app-chatmembers"]], inputs: { chatService: "chatService" }, decls: 8, vars: 2, consts: [[3, "ngClass"], [1, "header"], [3, "click"], [1, "body"], [4, "ngFor", "ngForOf"], [1, "member"]], template: function ChatmembersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatmembersComponent_Template_button_click_4_listener() { return ctx.closeMembers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatmembersComponent_div_7_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chatService.members);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["input[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 3px;\n  border: none;\n  font-size: 1em;\n}\n\ninput[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: #1E2529;\n  color: white;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #003367;\n  color: white;\n}\n\n.chatmembers[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  background-color: #171d20;\n  box-shadow: rgb(14, 17, 19) 1px 1px 5px;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: #1E2529;\n  color: white;\n  display: flex;\n}\n\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n\n.member[_ngcontent-%COMP%] {\n  color: white;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NoYXQuY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdG1lbWJlcnMvY2hhdG1lbWJlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FDZkE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0bWVtYmVycy9jaGF0bWVtYmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQsIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbmlucHV0IHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMjUyOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMzY3O1xuICBjb2xvcjogd2hpdGU7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9jaGF0LmNzc1wiO1xuLmNoYXRtZW1iZXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxZDIwO1xuICBib3gtc2hhZG93OiByZ2IoMTQsIDE3LCAxOSkgMXB4IDFweCA1cHg7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUyNTI5O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5oZWFkZXIgaDEge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZW1iZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatmembersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatmembers',
                templateUrl: './chatmembers.component.html',
                styleUrls: ['./chatmembers.component.css']
            }]
    }], function () { return []; }, { chatService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/chat/chatmessage/chatmessage.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/chat/chatmessage/chatmessage.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChatmessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatmessageComponent", function() { return ChatmessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class ChatmessageComponent {
    constructor() { }
    ngOnInit() {
    }
    setClasses() {
        return {
            message: true,
            mymessage: this.message.senderIsMe
        };
    }
}
ChatmessageComponent.ɵfac = function ChatmessageComponent_Factory(t) { return new (t || ChatmessageComponent)(); };
ChatmessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatmessageComponent, selectors: [["app-chatmessage"]], inputs: { message: "message" }, decls: 5, vars: 3, consts: [[3, "ngClass"], [1, "header"], [1, "body"]], template: function ChatmessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".message[_ngcontent-%COMP%] {\n  width: auto;\n  max-width: 80%;\n  background: #1E2529;\n  color: white;\n  border-radius: 5px 5px 5px 0;\n  margin: 8px;\n  padding: 3px;\n  box-shadow: rgb(14, 17, 19) 1px 1px 5px;\n}\n\n.message.mymessage[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background-color: #001A38;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXRtZXNzYWdlL2NoYXRtZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdG1lc3NhZ2UvY2hhdG1lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kOiAjMUUyNTI5O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDA7XG4gIG1hcmdpbjogOHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGJveC1zaGFkb3c6IHJnYigxNCwgMTcsIDE5KSAxcHggMXB4IDVweDtcbn1cblxuLm1lc3NhZ2UubXltZXNzYWdlIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDFBMzg7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatmessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatmessage',
                templateUrl: './chatmessage.component.html',
                styleUrls: ['./chatmessage.component.css']
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class LoginComponent {
    constructor(auth) {
        this.auth = auth;
        this.loginForm = {
            email: '',
            password: ''
        };
    }
    ngOnInit() {
        this._errorSubscription = this.auth.errors.subscribe((data) => {
            this.statusMessage = data;
        });
        this.statusMessage = "";
    }
    ngOnDestroy() {
        this._errorSubscription.unsubscribe();
    }
    onFormSubmit(event, data) {
        event.preventDefault();
        this.auth.login(data);
    }
    changeFormValue(event) {
        this.loginForm[event.target.name] = event.target.value;
    }
    statusMessageClasses() {
        return {
            "status-message": true,
            "text-danger": true,
            "hidden": this.statusMessage == ""
        };
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 14, vars: 2, consts: [[1, "input-group", "input-group-lg"], ["type", "text", "name", "email", "placeholder", "E-mail", 1, "form-control", 3, "change"], ["type", "password", "name", "password", "placeholder", "Password", 1, "form-control", 3, "change"], [1, "input-group", "input-group-lg", "form-center"], [1, "btn", "btn-lg", "btn-secondary", 3, "click"], [3, "ngClass"], [1, "form-center"], ["href", "register"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LoginComponent_Template_input_change_3_listener($event) { return ctx.changeFormValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LoginComponent_Template_input_change_5_listener($event) { return ctx.changeFormValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_7_listener($event) { return ctx.onFormSubmit($event, ctx.loginForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Or register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.statusMessageClasses());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.statusMessage, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["main[_ngcontent-%COMP%]{\n  background-color:rgba(0, 0, 0, 0.66);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  position: absolute;\n  left:50%;\n  top:50%;\n  transform: translate(-50%,-50%);\n  padding: 1rem 1rem 2rem 1rem;\n  box-shadow: 1px 10px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 1rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  background-color: rgb(66, 66, 66);\n  color: white;\n  border-radius: .5rem;\n  margin: 5px 0px;\n}\n\n.form-control[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  text-align: center;\n}\n\n.form-control[_ngcontent-%COMP%]::-moz-placeholder{\n  text-align: center;\n}\n\n.form-control[_ngcontent-%COMP%]::-ms-input-placeholder{\n  text-align: center;\n}\n\n.form-control[_ngcontent-%COMP%]::placeholder{\n  text-align: center;\n}\n\n.form-center[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-top: 2rem;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 1rem !important;\n  color: white !important;\n}\n\n.status-message[_ngcontent-%COMP%] {\n  margin: 1rem;\n  text-align: center;\n}\n\n@media screen and (max-width: 600px){\n  \n  main[_ngcontent-%COMP%]{\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2F1dGhlbnRpY2F0aW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsNENBQTRDO0VBQzVDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRkE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRkE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRkE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFO0lBQ0UsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC42Nik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OjUwJTtcbiAgdG9wOjUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgcGFkZGluZzogMXJlbSAxcmVtIDJyZW0gMXJlbTtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDY2LCA2Nik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cbi5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybS1jZW50ZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5zdGF0dXMtbWVzc2FnZSB7XG4gIG1hcmdpbjogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gIFxuICBtYWlue1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class RegisterComponent {
    constructor(auth) {
        this.auth = auth;
        this.loginForm = {
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            passwordRepeat: ''
        };
    }
    ngOnInit() {
        this._errorSubscription = this.auth.errors.subscribe((data) => {
            this.statusMessage = data;
        });
        this.statusMessage = "";
    }
    ngOnDestroy() {
        this._errorSubscription.unsubscribe();
    }
    onFormSubmit(event, data) {
        event.preventDefault();
        if (data.passwordRepeat == data.password) {
            this.auth.register(data);
        }
        else {
            this.statusMessage = "Passwords don't match!";
        }
    }
    changeFormValue(event) {
        this.loginForm[event.target.name] = event.target.value;
    }
    statusMessageClasses() {
        return {
            "status-message": true,
            "text-danger": true,
            "hidden": this.statusMessage == ""
        };
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 21, vars: 2, consts: [[1, "input-group", "input-group-lg"], ["type", "text", "name", "firstname", "placeholder", "Firstname", 1, "form-control", 3, "change"], ["type", "text", "name", "lastname", "placeholder", "Lastname", 1, "form-control", 3, "change"], ["type", "text", "name", "username", "placeholder", "Username", 1, "form-control", 3, "change"], ["type", "text", "name", "email", "placeholder", "E-mail", 1, "form-control", 3, "change"], ["type", "password", "name", "password", "placeholder", "Password", 1, "form-control", 3, "change"], ["type", "password", "name", "passwordRepeat", "placeholder", "Repeat password", 1, "form-control", 3, "change"], [1, "input-group", "input-group-lg", "form-center"], [1, "btn", "btn-lg", "btn-secondary", 3, "click"], [3, "ngClass"], [1, "form-center"], ["href", "login"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_3_listener($event) { return ctx.changeFormValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_4_listener($event) { return ctx.changeFormValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_6_listener($event) { return ctx.changeFormValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_8_listener($event) { return ctx.changeFormValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_10_listener($event) { return ctx.changeFormValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_12_listener($event) { return ctx.changeFormValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_14_listener($event) { return ctx.onFormSubmit($event, ctx.loginForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Or login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.statusMessageClasses());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.statusMessage, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["main[_ngcontent-%COMP%]{\n  background-color:rgba(0, 0, 0, 0.66);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  position: absolute;\n  left:50%;\n  top:50%;\n  transform: translate(-50%,-50%);\n  padding: 1rem 1rem 2rem 1rem;\n  box-shadow: 1px 10px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 1rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  background-color: rgb(66, 66, 66);\n  color: white;\n  border-radius: .5rem;\n  margin: 5px 0px;\n}\n\n.form-control[_ngcontent-%COMP%]::-webkit-input-placeholder{\n  text-align: center;\n}\n\n.form-control[_ngcontent-%COMP%]::-moz-placeholder{\n  text-align: center;\n}\n\n.form-control[_ngcontent-%COMP%]::-ms-input-placeholder{\n  text-align: center;\n}\n\n.form-control[_ngcontent-%COMP%]::placeholder{\n  text-align: center;\n}\n\n.form-center[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-top: 2rem;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 1rem !important;\n  color: white !important;\n}\n\n.status-message[_ngcontent-%COMP%] {\n  margin: 1rem;\n  text-align: center;\n}\n\n@media screen and (max-width: 600px){\n  \n  main[_ngcontent-%COMP%]{\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2F1dGhlbnRpY2F0aW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsNENBQTRDO0VBQzVDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRkE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRkE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRkE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFO0lBQ0UsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC42Nik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OjUwJTtcbiAgdG9wOjUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgcGFkZGluZzogMXJlbSAxcmVtIDJyZW0gMXJlbTtcbiAgYm94LXNoYWRvdzogMXB4IDEwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDY2LCA2Nik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cbi5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybS1jZW50ZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5zdGF0dXMtbWVzc2FnZSB7XG4gIG1hcmdpbjogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gIFxuICBtYWlue1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthenticationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = "http://noahk.ddns.net/Websites/chatapp/api/";
        this.errors = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    login(data) {
        this.http.post(this.baseUrl + "login.php", data).subscribe((response) => {
            if (response.status !== "success") {
                this.errors.next(response.message);
            }
            else {
                sessionStorage.setItem('userToken', response.token);
                sessionStorage.setItem('websocketUrl', response.websocket);
                this.router.navigate(['chat']);
            }
        });
    }
    register(data) {
        this.http.post(this.baseUrl + "register.php", data).subscribe((response) => {
            if (response.status !== "success") {
                this.errors.next(response.message);
            }
            else {
                this.login({
                    email: data.email,
                    password: data.password
                });
            }
        });
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/webSocket */ "./node_modules/rxjs/_esm2015/webSocket/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class ChatService {
    constructor(router) {
        this.router = router;
        this.callbacks = new Map();
        this.errors = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        if (sessionStorage.getItem("userToken") === null || sessionStorage.getItem("websocketUrl") === null) {
            this.router.navigate(['login']);
        }
        this.messages = [];
        this.chats = [];
        this.members = [];
        this.showMembers = false;
        this.selectedChat = -1;
        this.chatName = "";
    }
    setupSocket() {
        this.socket = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__["webSocket"])(sessionStorage.getItem("websocketUrl"));
        this.socket.subscribe({
            next: (msg) => {
                switch (msg.type) {
                    case 'response':
                        // Responses may have callbacks.
                        if (msg.hasOwnProperty('identifier') && this.callbacks.has(msg.identifier)) {
                            this.callbacks.get(msg.identifier)(msg);
                            this.callbacks.delete(msg.identifier);
                        }
                        break;
                    case 'message':
                        if (msg.chat == this.selectedChat) {
                            this.messages.push(msg);
                            console.log(msg);
                        }
                        break;
                    default:
                        break;
                }
                console.log(msg);
            },
            error: (err) => {
                this.router.navigate(['login']);
            },
            complete: () => {
                this.errors.next("Disconnected!");
                console.log("Connection closed!");
            }
        });
    }
    authenticate() {
        if (sessionStorage.getItem("userToken") === null || sessionStorage.getItem("websocketUrl") === null) {
            this.router.navigate(['login']);
        }
        this.socket.next({
            type: "authenticate",
            token: sessionStorage.getItem("userToken")
        });
        sessionStorage.setItem("userToken", null);
    }
    sendJson(obj, callback) {
        let callbackid = Math.floor(Math.random() * 1000000);
        while (this.callbacks.has(callbackid)) {
            callbackid = Math.floor(Math.random() * 1000000);
        }
        this.callbacks.set(callbackid, callback);
        obj.identifier = callbackid;
        this.socket.next(obj);
    }
    leaveChat() {
        this.sendJson({
            type: "leaveChat",
            chatid: this.selectedChat
        }, (data) => {
            if (data.status == "error") {
                this.onError(data);
            }
        });
        this.selectedChat = -1;
        this.chatName = "";
        this.refreshChats();
        this.showMembers = false;
        this.messages = [];
    }
    joinChat(chatid) {
        this.selectedChat = chatid;
        this.chatName = this.chats[chatid].name;
        this.sendJson({
            type: "joinChat",
            chatid: this.selectedChat
        }, (data) => {
            if (data.status == "error") {
                this.onError(data);
            }
        });
        this.refreshChats();
    }
    sendMessage(msg) {
        if (msg != "" && this.selectedChat != -1) {
            this.sendJson({
                type: "sendMessage",
                chatid: this.selectedChat,
                message: msg
            }, (data) => {
                if (data.status == "error") {
                    this.onError(data);
                }
            });
        }
    }
    refreshChats(callback = () => { }) {
        this.sendJson({
            type: "getChats",
            name: name
        }, (data) => {
            if (data.status == "success") {
                this.chats = data.chats;
                callback();
                if (this.selectedChat != -1) {
                    this.members = this.chats[this.selectedChat].users;
                }
                console.log(this.members);
            }
            else {
                this.onError(data);
            }
        });
    }
    createChat(name) {
        this.sendJson({
            type: "createChat",
            name: name
        }, (data) => {
            if (data.status == "success") {
                this.selectedChat = data.chatid;
                this.refreshChats(() => {
                    this.chatName = this.chats[data.chatid].name;
                });
            }
            else {
                this.onError(data);
            }
        });
    }
    onError(data) {
        if (data.error == "Unauthenticated!") {
            this.router.navigate(['login']);
        }
        this.errors.next(data.error);
        console.log(data);
    }
    isInChat() {
        return this.selectedChat != -1;
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/noah/Documents/VBox-projects/www/default/projecten/chatapp/gui/gui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map