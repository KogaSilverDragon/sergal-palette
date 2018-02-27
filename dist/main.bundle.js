webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sergal_detail_sergal_detail_component__ = __webpack_require__("./src/app/sergal-detail/sergal-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '*', redirectTo: 'pure-northern', pathMatch: 'full' },
    { path: '', redirectTo: 'pure-northern', pathMatch: 'full' },
    { path: ':type', component: __WEBPACK_IMPORTED_MODULE_2__sergal_detail_sergal_detail_component__["a" /* SergalDetailComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"app-title\">Sergal Palette</h1>\n<sergal-list [data]=\"sergalData\"></sergal-list>\n<router-outlet></router-outlet>\n<div id=\"about\"\n     [ngClass]=\"{ 'active': aboutToggle }\">\n  <div id=\"about-toggle\"\n       (click)=\"aboutToggle = !aboutToggle;\"></div>\n  <div id=\"about-content\">\n    <h2 class=\"about-titles\">About the project</h2>\n    <p>\n      Howdy! I'm Marcos Koga(aka Koga SilverDragon) and did this little project(Which it's just a draft and I want to make improve it later!) after Drago's idea, redesigned by Flam and with fresh new info from Kiki!\n    </p>\n    <p>Thanks a lot for the help! 💙</p>\n    <p>If you have any feedback and/or suggestions, feel free to poke me at Telegram! My handle is:\n      <a href=\"https://telegram.me/KogaSilverDragon\"\n      target=\"_blank\"\n      rel=\"noopener noreferrer\">@KogaSilverDragon</a>\n    </p>\n    <h2 class=\"about-titles\">About Vilous</h2>\n    <ul id=\"about-links\">\n      <li>Vilous - Artwork and Design @\n        <a href=\"http://www.furaffinity.net/user/mick39\"\n           target=\"_blank\"\n           rel=\"noopener noreferrer\">Mick39’s FA</a>\n      </li>\n      <li>Vilous - Story and Lore @\n        <a href=\"http://www.furaffinity.net/user/Kiki-UMA\"\n           target=\"_blank\"\n           rel=\"noopener noreferrer\">Kiki’s FA</a>\n      </li>\n      <li>\n        <a href=\"https://www.patreon.com/mick39\"\n           target=\"_blank\"\n           rel=\"noopener noreferrer\">Mick39’s Patreon</a>\n      </li>\n      <li>\n        <a href=\"https://www.patreon.com/Tenteraten\"\n           target=\"_blank\"\n           rel=\"noopener noreferrer\">\n          Kiki’s Patreon for Vilous concepts in development\n        </a>\n      </li>\n      <li>\n        <a href=\"http://vilous.net/\"\n           target=\"_blank\"\n           rel=\"noopener noreferrer\">Vilous official website</a>\n      </li>\n      <li>\n        <a href=\"http://vilous.net/wiki/Vilous_Wiki\"\n           target=\"_blank\"\n           rel=\"noopener noreferrer\">Vilous official Wiki</a>\n      </li>\n    </ul>\n  </div>\n</div>\n<div id=\"konami\"\n     [ngClass]=\"{ 'active': konamiActive }\"\n     (konami)=\"yay()\">\n  <div id=\"Drago\"></div>\n  <div id=\"Flam\"></div>\n  <div id=\"Koga\"></div>\n  <div id=\"MickKiki\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after, q:before, q:after {\n    content: '';\n    content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n@-webkit-keyframes flash {\n  0% {\n    opacity: 1; }\n  25% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  75% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n@keyframes flash {\n  0% {\n    opacity: 1; }\n  25% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  75% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n@-webkit-keyframes bounce {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  20% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px); }\n  50% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  60% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px); }\n  80% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n@keyframes bounce {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  20% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px); }\n  50% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  60% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px); }\n  80% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n@-webkit-keyframes shake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  10% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px); }\n  20% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px); }\n  30% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px); }\n  40% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px); }\n  50% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px); }\n  60% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px); }\n  70% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px); }\n  80% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px); }\n  90% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px); }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n@keyframes shake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  10% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px); }\n  20% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px); }\n  30% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px); }\n  40% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px); }\n  50% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px); }\n  60% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px); }\n  70% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px); }\n  80% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px); }\n  90% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px); }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n@-webkit-keyframes tada {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); }\n  10% {\n    -webkit-transform: scale(0.9) rotate(-3deg);\n    transform: scale(0.9) rotate(-3deg); }\n  20% {\n    -webkit-transform: scale(0.9) rotate(-3deg);\n    transform: scale(0.9) rotate(-3deg); }\n  30% {\n    -webkit-transform: scale(1.1) rotate(3deg);\n    transform: scale(1.1) rotate(3deg); }\n  40% {\n    -webkit-transform: scale(1.1) rotate(-3deg);\n    transform: scale(1.1) rotate(-3deg); }\n  50% {\n    -webkit-transform: scale(1.1) rotate(3deg);\n    transform: scale(1.1) rotate(3deg); }\n  60% {\n    -webkit-transform: scale(1.1) rotate(-3deg);\n    transform: scale(1.1) rotate(-3deg); }\n  70% {\n    -webkit-transform: scale(1.1) rotate(3deg);\n    transform: scale(1.1) rotate(3deg); }\n  80% {\n    -webkit-transform: scale(1.1) rotate(-3deg);\n    transform: scale(1.1) rotate(-3deg); }\n  90% {\n    -webkit-transform: scale(1.1) rotate(3deg);\n    transform: scale(1.1) rotate(3deg); }\n  100% {\n    -webkit-transform: scale(1) rotate(0);\n    transform: scale(1) rotate(0); } }\n@keyframes tada {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); }\n  10% {\n    -webkit-transform: scale(0.9) rotate(-3deg);\n    transform: scale(0.9) rotate(-3deg); }\n  20% {\n    -webkit-transform: scale(0.9) rotate(-3deg);\n    transform: scale(0.9) rotate(-3deg); }\n  30% {\n    -webkit-transform: scale(1.1) rotate(3deg);\n    transform: scale(1.1) rotate(3deg); }\n  40% {\n    -webkit-transform: scale(1.1) rotate(-3deg);\n    transform: scale(1.1) rotate(-3deg); }\n  50% {\n    -webkit-transform: scale(1.1) rotate(3deg);\n    transform: scale(1.1) rotate(3deg); }\n  60% {\n    -webkit-transform: scale(1.1) rotate(-3deg);\n    transform: scale(1.1) rotate(-3deg); }\n  70% {\n    -webkit-transform: scale(1.1) rotate(3deg);\n    transform: scale(1.1) rotate(3deg); }\n  80% {\n    -webkit-transform: scale(1.1) rotate(-3deg);\n    transform: scale(1.1) rotate(-3deg); }\n  90% {\n    -webkit-transform: scale(1.1) rotate(3deg);\n    transform: scale(1.1) rotate(3deg); }\n  100% {\n    -webkit-transform: scale(1) rotate(0);\n    transform: scale(1) rotate(0); } }\n@-webkit-keyframes swing {\n  20%, 40%, 60%, 80%, 100% {\n    -webkit-transform-origin: top center 50%;\n    transform-origin: top center 50%; }\n  20% {\n    -webkit-transform: rotate(15deg);\n    transform: rotate(15deg); }\n  40% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg); }\n  60% {\n    -webkit-transform: rotate(5deg);\n    transform: rotate(5deg); }\n  80% {\n    -webkit-transform: rotate(-5deg);\n    transform: rotate(-5deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); } }\n@keyframes swing {\n  20%, 40%, 60%, 80%, 100% {\n    -webkit-transform-origin: top center 50%;\n    transform-origin: top center 50%; }\n  20% {\n    -webkit-transform: rotate(15deg);\n    transform: rotate(15deg); }\n  40% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg); }\n  60% {\n    -webkit-transform: rotate(5deg);\n    transform: rotate(5deg); }\n  80% {\n    -webkit-transform: rotate(-5deg);\n    transform: rotate(-5deg); }\n  100% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); } }\n@-webkit-keyframes wobble {\n  0% {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%); }\n  15% {\n    -webkit-transform: translateX(-25%) rotate(-5deg);\n    transform: translateX(-25%) rotate(-5deg); }\n  30% {\n    -webkit-transform: translateX(20%) rotate(3deg);\n    transform: translateX(20%) rotate(3deg); }\n  45% {\n    -webkit-transform: translateX(-15%) rotate(-3deg);\n    transform: translateX(-15%) rotate(-3deg); }\n  60% {\n    -webkit-transform: translateX(10%) rotate(2deg);\n    transform: translateX(10%) rotate(2deg); }\n  75% {\n    -webkit-transform: translateX(-5%) rotate(-1deg);\n    transform: translateX(-5%) rotate(-1deg); }\n  100% {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%); } }\n@keyframes wobble {\n  0% {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%); }\n  15% {\n    -webkit-transform: translateX(-25%) rotate(-5deg);\n    transform: translateX(-25%) rotate(-5deg); }\n  30% {\n    -webkit-transform: translateX(20%) rotate(3deg);\n    transform: translateX(20%) rotate(3deg); }\n  45% {\n    -webkit-transform: translateX(-15%) rotate(-3deg);\n    transform: translateX(-15%) rotate(-3deg); }\n  60% {\n    -webkit-transform: translateX(10%) rotate(2deg);\n    transform: translateX(10%) rotate(2deg); }\n  75% {\n    -webkit-transform: translateX(-5%) rotate(-1deg);\n    transform: translateX(-5%) rotate(-1deg); }\n  100% {\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%); } }\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); }\n  50% {\n    -webkit-transform: scale(1.1, 1.1);\n    transform: scale(1.1, 1.1); }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); } }\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); }\n  50% {\n    -webkit-transform: scale(1.1, 1.1);\n    transform: scale(1.1, 1.1); }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); } }\n@-webkit-keyframes wiggle {\n  0% {\n    -webkit-transform: skewX(9deg);\n    transform: skewX(9deg); }\n  10% {\n    -webkit-transform: skewX(-8deg);\n    transform: skewX(-8deg); }\n  20% {\n    -webkit-transform: skewX(7deg);\n    transform: skewX(7deg); }\n  30% {\n    -webkit-transform: skewX(-6deg);\n    transform: skewX(-6deg); }\n  40% {\n    -webkit-transform: skewX(5deg);\n    transform: skewX(5deg); }\n  50% {\n    -webkit-transform: skewX(-4deg);\n    transform: skewX(-4deg); }\n  60% {\n    -webkit-transform: skewX(3deg);\n    transform: skewX(3deg); }\n  70% {\n    -webkit-transform: skewX(-2deg);\n    transform: skewX(-2deg); }\n  80% {\n    -webkit-transform: skewX(1deg);\n    transform: skewX(1deg); }\n  90% {\n    -webkit-transform: skewX(0deg);\n    transform: skewX(0deg); }\n  100% {\n    -webkit-transform: skewX(0deg);\n    transform: skewX(0deg); } }\n@keyframes wiggle {\n  0% {\n    -webkit-transform: skewX(9deg);\n    transform: skewX(9deg); }\n  10% {\n    -webkit-transform: skewX(-8deg);\n    transform: skewX(-8deg); }\n  20% {\n    -webkit-transform: skewX(7deg);\n    transform: skewX(7deg); }\n  30% {\n    -webkit-transform: skewX(-6deg);\n    transform: skewX(-6deg); }\n  40% {\n    -webkit-transform: skewX(5deg);\n    transform: skewX(5deg); }\n  50% {\n    -webkit-transform: skewX(-4deg);\n    transform: skewX(-4deg); }\n  60% {\n    -webkit-transform: skewX(3deg);\n    transform: skewX(3deg); }\n  70% {\n    -webkit-transform: skewX(-2deg);\n    transform: skewX(-2deg); }\n  80% {\n    -webkit-transform: skewX(1deg);\n    transform: skewX(1deg); }\n  90% {\n    -webkit-transform: skewX(0deg);\n    transform: skewX(0deg); }\n  100% {\n    -webkit-transform: skewX(0deg);\n    transform: skewX(0deg); } }\n@-webkit-keyframes bounceOut {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); }\n  25% {\n    -webkit-transform: scale(0.95, 0.95);\n    transform: scale(0.95, 0.95); }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.1, 1.1);\n    transform: scale(1.1, 1.1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.3, 0.3);\n    transform: scale(0.3, 0.3); } }\n@keyframes bounceOut {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); }\n  25% {\n    -webkit-transform: scale(0.95, 0.95);\n    transform: scale(0.95, 0.95); }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.1, 1.1);\n    transform: scale(1.1, 1.1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.3, 0.3);\n    transform: scale(0.3, 0.3); } }\n@-webkit-keyframes bounceOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px); } }\n@keyframes bounceOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px); } }\n@-webkit-keyframes bounceOutDown {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px); } }\n@keyframes bounceOutDown {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px); } }\n@-webkit-keyframes bounceOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(20px);\n    transform: translateX(20px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px); } }\n@keyframes bounceOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(20px);\n    transform: translateX(20px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px); } }\n@-webkit-keyframes bounceOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(-20px);\n    transform: translateX(-20px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px); } }\n@keyframes bounceOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateX(-20px);\n    transform: translateX(-20px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px); } }\n@-webkit-keyframes bounceIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3, 0.3);\n    transform: scale(0.3, 0.3); }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.05, 1.05);\n    transform: scale(1.05, 1.05); }\n  70% {\n    -webkit-transform: scale(0.9, 0.9);\n    transform: scale(0.9, 0.9); }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); } }\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.3, 0.3);\n    transform: scale(0.3, 0.3); }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(1.05, 1.05);\n    transform: scale(1.05, 1.05); }\n  70% {\n    -webkit-transform: scale(0.9, 0.9);\n    transform: scale(0.9, 0.9); }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); } }\n@-webkit-keyframes bounceInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(30px);\n    transform: translateY(30px); }\n  80% {\n    -webkit-transform: translateY(-10px);\n    transform: translateY(-10px); }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n@keyframes bounceInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(30px);\n    transform: translateY(30px); }\n  80% {\n    -webkit-transform: translateY(-10px);\n    transform: translateY(-10px); }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n@-webkit-keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px); }\n  80% {\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px); }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px); }\n  80% {\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px); }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n@-webkit-keyframes bounceInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-30px);\n    transform: translateX(-30px); }\n  80% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px); }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n@keyframes bounceInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(-30px);\n    transform: translateX(-30px); }\n  80% {\n    -webkit-transform: translateX(10px);\n    transform: translateX(10px); }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n@-webkit-keyframes bounceInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(30px);\n    transform: translateX(30px); }\n  80% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px); }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n@keyframes bounceInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateX(30px);\n    transform: translateX(30px); }\n  80% {\n    -webkit-transform: translateX(-10px);\n    transform: translateX(-10px); }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@-webkit-keyframes fadeOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n    opacity: 0; } }\n@keyframes fadeOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n    opacity: 0; } }\n@-webkit-keyframes fadeOutDown {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px);\n    opacity: 0; } }\n@keyframes fadeOutDown {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px);\n    opacity: 0; } }\n@-webkit-keyframes fadeOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(20px);\n    transform: translateX(20px);\n    opacity: 0; } }\n@keyframes fadeOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(20px);\n    transform: translateX(20px);\n    opacity: 0; } }\n@-webkit-keyframes fadeOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(-20px);\n    transform: translateX(-20px);\n    opacity: 0; } }\n@keyframes fadeOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(-20px);\n    transform: translateX(-20px);\n    opacity: 0; } }\n@-webkit-keyframes fadeOutUpBig {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n    opacity: 0; } }\n@keyframes fadeOutUpBig {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px);\n    opacity: 0; } }\n@-webkit-keyframes fadeOutDownBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px); } }\n@keyframes fadeOutDownBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px); } }\n@-webkit-keyframes fadeOutRightBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px); } }\n@keyframes fadeOutRightBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px); } }\n@-webkit-keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px); } }\n@keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px); } }\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n@-webkit-keyframes fadeInUp {\n  0% {\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; } }\n@keyframes fadeInUp {\n  0% {\n    -webkit-transform: translateY(20px);\n    transform: translateY(20px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; } }\n@-webkit-keyframes fadeInDown {\n  0% {\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; } }\n@keyframes fadeInDown {\n  0% {\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; } }\n@-webkit-keyframes fadeInRight {\n  0% {\n    -webkit-transform: translateX(20px);\n    transform: translateX(20px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1; } }\n@keyframes fadeInRight {\n  0% {\n    -webkit-transform: translateX(20px);\n    transform: translateX(20px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1; } }\n@-webkit-keyframes fadeInLeft {\n  0% {\n    -webkit-transform: translateX(-20px);\n    transform: translateX(-20px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1; } }\n@keyframes fadeInLeft {\n  0% {\n    -webkit-transform: translateX(-20px);\n    transform: translateX(-20px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1; } }\n@-webkit-keyframes fadeInUpBig {\n  0% {\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; } }\n@keyframes fadeInUpBig {\n  0% {\n    -webkit-transform: translateY(2000px);\n    transform: translateY(2000px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n    opacity: 1; } }\n@-webkit-keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n@keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-2000px);\n    transform: translateY(-2000px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n@-webkit-keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n@keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(2000px);\n    transform: translateX(2000px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n@-webkit-keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n@keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-2000px);\n    transform: translateX(-2000px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n@-webkit-keyframes flip {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(0);\n    transform: perspective(400px) rotateY(0);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  40% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg);\n    transform: perspective(400px) translateZ(150px) rotateY(170deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  50% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  80% {\n    -webkit-transform: perspective(400px) rotateY(360deg) scale(0.95);\n    transform: perspective(400px) rotateY(360deg) scale(0.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  100% {\n    -webkit-transform: perspective(400px) scale(1);\n    transform: perspective(400px) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; } }\n@keyframes flip {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(0);\n    transform: perspective(400px) rotateY(0);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  40% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg);\n    transform: perspective(400px) translateZ(150px) rotateY(170deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  50% {\n    -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  80% {\n    -webkit-transform: perspective(400px) rotateY(360deg) scale(0.95);\n    transform: perspective(400px) rotateY(360deg) scale(0.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  100% {\n    -webkit-transform: perspective(400px) scale(1);\n    transform: perspective(400px) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; } }\n@-webkit-keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotateX(-10deg);\n    transform: perspective(400px) rotateX(-10deg); }\n  70% {\n    -webkit-transform: perspective(400px) rotateX(10deg);\n    transform: perspective(400px) rotateX(10deg); }\n  100% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; } }\n@keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotateX(-10deg);\n    transform: perspective(400px) rotateX(-10deg); }\n  70% {\n    -webkit-transform: perspective(400px) rotateX(10deg);\n    transform: perspective(400px) rotateX(10deg); }\n  100% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; } }\n@-webkit-keyframes flipOutX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0; } }\n@keyframes flipOutX {\n  0% {\n    -webkit-transform: perspective(400px) rotateX(0deg);\n    transform: perspective(400px) rotateX(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotateX(90deg);\n    transform: perspective(400px) rotateX(90deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0; } }\n@-webkit-keyframes flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotateY(-10deg);\n    transform: perspective(400px) rotateY(-10deg); }\n  70% {\n    -webkit-transform: perspective(400px) rotateY(10deg);\n    transform: perspective(400px) rotateY(10deg); }\n  100% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; } }\n@keyframes flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotateY(-10deg);\n    transform: perspective(400px) rotateY(-10deg); }\n  70% {\n    -webkit-transform: perspective(400px) rotateY(10deg);\n    transform: perspective(400px) rotateY(10deg); }\n  100% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; } }\n@-webkit-keyframes flipOutY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0; } }\n@keyframes flipOutY {\n  0% {\n    -webkit-transform: perspective(400px) rotateY(0deg);\n    transform: perspective(400px) rotateY(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotateY(90deg);\n    transform: perspective(400px) rotateY(90deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0; } }\n@-webkit-keyframes lightSpeedIn {\n  0% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0; }\n  60% {\n    -webkit-transform: translateX(-20%) skewX(30deg);\n    transform: translateX(-20%) skewX(30deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translateX(0%) skewX(-15deg);\n    transform: translateX(0%) skewX(-15deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; } }\n@keyframes lightSpeedIn {\n  0% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0; }\n  60% {\n    -webkit-transform: translateX(-20%) skewX(30deg);\n    transform: translateX(-20%) skewX(30deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; }\n  80% {\n    -webkit-transform: translateX(0%) skewX(-15deg);\n    transform: translateX(0%) skewX(-15deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; } }\n@-webkit-keyframes lightSpeedOut {\n  0% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0; } }\n@keyframes lightSpeedOut {\n  0% {\n    -webkit-transform: translateX(0%) skewX(0deg);\n    transform: translateX(0%) skewX(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(100%) skewX(-30deg);\n    transform: translateX(100%) skewX(-30deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0; } }\n@-webkit-keyframes rotateOut {\n  0% {\n    -webkit-transform-origin: center center 50%;\n    transform-origin: center center 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: center center 50%;\n    transform-origin: center center 50%;\n    -webkit-transform: rotate(200deg);\n    transform: rotate(200deg);\n    opacity: 0; } }\n@keyframes rotateOut {\n  0% {\n    -webkit-transform-origin: center center 50%;\n    transform-origin: center center 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: center center 50%;\n    transform-origin: center center 50%;\n    -webkit-transform: rotate(200deg);\n    transform: rotate(200deg);\n    opacity: 0; } }\n@-webkit-keyframes rotateOutDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0; } }\n@keyframes rotateOutDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0; } }\n@-webkit-keyframes rotateOutUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0; } }\n@keyframes rotateOutUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0; } }\n@-webkit-keyframes rotateOutDownRight {\n  0% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0; } }\n@keyframes rotateOutDownRight {\n  0% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0; } }\n@-webkit-keyframes rotateOutUpRight {\n  0% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0; } }\n@keyframes rotateOutUpRight {\n  0% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0; } }\n@-webkit-keyframes rotateIn {\n  0% {\n    -webkit-transform-origin: center center 50%;\n    transform-origin: center center 50%;\n    -webkit-transform: rotate(-200deg);\n    transform: rotate(-200deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: center center 50%;\n    transform-origin: center center 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; } }\n@keyframes rotateIn {\n  0% {\n    -webkit-transform-origin: center center 50%;\n    transform-origin: center center 50%;\n    -webkit-transform: rotate(-200deg);\n    transform: rotate(-200deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: center center 50%;\n    transform-origin: center center 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; } }\n@-webkit-keyframes rotateInDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; } }\n@keyframes rotateInDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; } }\n@-webkit-keyframes rotateInUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; } }\n@keyframes rotateInUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom 50%;\n    transform-origin: left bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; } }\n@-webkit-keyframes rotateInUpRight {\n  0% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; } }\n@keyframes rotateInUpRight {\n  0% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(-90deg);\n    transform: rotate(-90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; } }\n@-webkit-keyframes rotateInDownRight {\n  0% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; } }\n@keyframes rotateInDownRight {\n  0% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom 50%;\n    transform-origin: right bottom 50%;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    opacity: 1; } }\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    -webkit-transform-origin: top left 50%;\n    transform-origin: top left 50%;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  20%, 60% {\n    -webkit-transform: rotate(80deg);\n    transform: rotate(80deg);\n    -webkit-transform-origin: top left 50%;\n    transform-origin: top left 50%;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  40% {\n    -webkit-transform: rotate(60deg);\n    transform: rotate(60deg);\n    -webkit-transform-origin: top left 50%;\n    transform-origin: top left 50%;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  80% {\n    -webkit-transform: rotate(60deg) translateY(0);\n    transform: rotate(60deg) translateY(0);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n    -webkit-transform-origin: top left 50%;\n    transform-origin: top left 50%;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  100% {\n    -webkit-transform: translateY(700px);\n    transform: translateY(700px);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0; } }\n@keyframes hinge {\n  0% {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    -webkit-transform-origin: top left 50%;\n    transform-origin: top left 50%;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  20%, 60% {\n    -webkit-transform: rotate(80deg);\n    transform: rotate(80deg);\n    -webkit-transform-origin: top left 50%;\n    transform-origin: top left 50%;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  40% {\n    -webkit-transform: rotate(60deg);\n    transform: rotate(60deg);\n    -webkit-transform-origin: top left 50%;\n    transform-origin: top left 50%;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  80% {\n    -webkit-transform: rotate(60deg) translateY(0);\n    transform: rotate(60deg) translateY(0);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n    -webkit-transform-origin: top left 50%;\n    transform-origin: top left 50%;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  100% {\n    -webkit-transform: translateY(700px);\n    transform: translateY(700px);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0; } }\n@-webkit-keyframes rollIn {\n  0% {\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n    -webkit-transform: translateX(-100%) rotate(-120deg);\n    transform: translateX(-100%) rotate(-120deg); }\n  100% {\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg); } }\n@keyframes rollIn {\n  0% {\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n    -webkit-transform: translateX(-100%) rotate(-120deg);\n    transform: translateX(-100%) rotate(-120deg); }\n  100% {\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg); } }\n@-webkit-keyframes rollOut {\n  0% {\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg); }\n  100% {\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n    -webkit-transform: translateX(-100%) rotate(-120deg);\n    transform: translateX(-100%) rotate(-120deg); } }\n@keyframes rollOut {\n  0% {\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n    opacity: 1;\n    -webkit-transform: translateX(0px) rotate(0deg);\n    transform: translateX(0px) rotate(0deg); }\n  100% {\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n    -webkit-transform: translateX(-100%) rotate(-120deg);\n    transform: translateX(-100%) rotate(-120deg); } }\n/* #### Generated By: http://www.cufonfonts.com #### */\n@font-face {\n  font-family: 'LuzSans-Book';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/luzsans-book/LUZRO.TTF\"), url(\"/assets/fonts/luzsans-book/LUZRO.woff\") format(\"woff\"); }\n:host {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #EFEFEF;\n  color: #646464; }\n#app-title {\n  font-size: 40px;\n  padding: 30px;\n  font-family: \"LuzSans-Book\";\n  text-align: center; }\n#about {\n  width: 100%;\n  height: 100%;\n  font-family: \"LuzSans-Book\";\n  position: absolute;\n  background-color: rgba(30, 30, 30, 0);\n  pointer-events: none;\n  z-index: 9999;\n  overflow: hidden;\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease; }\n#about-toggle {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    top: -70px;\n    right: -70px;\n    background-color: #646464;\n    color: #FFF;\n    cursor: pointer;\n    pointer-events: initial;\n    -webkit-transform: rotate(30deg);\n    transform: rotate(30deg);\n    -webkit-transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);\n    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1); }\n#about-toggle:before {\n      content: 'About';\n      position: absolute;\n      bottom: 0; }\n#about-toggle:after {\n      content: 'Close';\n      -webkit-transform: rotate(180deg);\n      transform: rotate(180deg); }\n#about-toggle:before, #about-toggle:after {\n      display: block;\n      padding: 25px 30px;\n      font-size: 18px; }\n#about-content {\n    padding: 40px;\n    font-size: 16px;\n    width: 600px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    background-color: #646464;\n    color: #FFF;\n    opacity: 0; }\n#about-content p {\n      line-height: 1.2;\n      margin-bottom: 10px; }\n#about-links {\n    line-height: 1.4; }\n#about a {\n    -webkit-transition: 0.2s ease;\n    transition: 0.2s ease; }\n#about a:link,\n  #about a:visited,\n  #about a:active {\n    color: #FFF; }\n#about a:focus,\n  #about a:hover {\n    background-color: #EFEFEF;\n    color: #646464; }\n#about.active {\n    background-color: rgba(20, 20, 20, 0.8);\n    pointer-events: initial; }\n#about.active #about-toggle {\n      -webkit-transform: rotate(210deg);\n      transform: rotate(210deg); }\n#about.active #about-content {\n      opacity: 1; }\n.about-titles {\n  font-size: 24px;\n  margin-bottom: 10px; }\n#konami {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  z-index: 99999;\n  pointer-events: none;\n  -webkit-transform: translate(-100%, -50%);\n  transform: translate(-100%, -50%); }\n#konami.active {\n    -webkit-animation: floating 20s linear;\n    animation: floating 20s linear;\n    -webkit-animation-fill-mode: forward;\n    animation-fill-mode: forward; }\n#Drago,\n#Flam,\n#Koga,\n#MickKiki {\n  width: 200px;\n  height: 200px;\n  float: right;\n  -webkit-transform: translateY(-10%);\n  transform: translateY(-10%); }\n#Drago {\n  margin-top: -150%;\n  background: url('uwu.ab47f5f11c4dfb6eb3d1.png');\n  background-size: contain;\n  -webkit-animation: floating-bubble 1s ease 0s infinite alternate;\n  animation: floating-bubble 1s ease 0s infinite alternate; }\n#Flam {\n  margin-top: 100%;\n  margin-right: 300%;\n  background: url('flamstickersdrawing.ac91c79861bb0a45b617.png');\n  background-size: cover;\n  -webkit-animation: floating-bubble 1s ease 1s infinite alternate;\n  animation: floating-bubble 1s ease 1s infinite alternate; }\n#Koga {\n  margin-top: -300%;\n  margin-right: 600%;\n  background: url('kogatea.58d7c2cd3dddc7f236c1.png');\n  background-size: contain;\n  -webkit-animation: floating-bubble 1s ease 0s infinite alternate;\n  animation: floating-bubble 1s ease 0s infinite alternate; }\n#MickKiki {\n  margin-top: -100%;\n  margin-right: 900%;\n  background: url('mickKiki2.7814f9798aa485f1a661.png');\n  background-size: cover;\n  -webkit-animation: floating-bubble 1s ease 1s infinite alternate;\n  animation: floating-bubble 1s ease 1s infinite alternate; }\n@-webkit-keyframes floating-bubble {\n  from {\n    -webkit-transform: translateY(-20%);\n    transform: translateY(-20%); }\n  to {\n    -webkit-transform: translateY(20%);\n    transform: translateY(20%); } }\n@keyframes floating-bubble {\n  from {\n    -webkit-transform: translateY(-20%);\n    transform: translateY(-20%); }\n  to {\n    -webkit-transform: translateY(20%);\n    transform: translateY(20%); } }\n@-webkit-keyframes floating {\n  from {\n    left: 0%; }\n  to {\n    left: calc(280% + 200px); } }\n@keyframes floating {\n  from {\n    left: 0%; }\n  to {\n    left: calc(280% + 200px); } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.aboutToggle = false;
        this.konamiActive = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.sergalData = this.appService.getSergalList();
    };
    AppComponent.prototype.yay = function () {
        var _this = this;
        if (!this.konamiActive) {
            this.konamiActive = true;
            setTimeout(function () {
                _this.konamiActive = false;
            }, 20000);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sergal_list_sergal_list_component__ = __webpack_require__("./src/app/sergal-list/sergal-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sergal_detail_sergal_detail_component__ = __webpack_require__("./src/app/sergal-detail/sergal-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__color_palette_color_palette_component__ = __webpack_require__("./src/app/color-palette/color-palette.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__custom_reuse_strategy__ = __webpack_require__("./src/app/custom-reuse-strategy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_konami_dist__ = __webpack_require__("./node_modules/ngx-konami/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__sergal_list_sergal_list_component__["a" /* SergalListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__sergal_detail_sergal_detail_component__["a" /* SergalDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_5__color_palette_color_palette_component__["a" /* ColorPaletteComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_konami_dist__["a" /* KonamiModule */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouteReuseStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_8__custom_reuse_strategy__["a" /* CustomReuseStrategy */] },
                __WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* AppService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SERGAL_DATA = [
    {
        name: 'Pure Northern',
        type: 'pure-northern',
        eyeColors: [],
        coatColors: [
            {
                id: 0,
                color: '#000032',
                rare: false
            },
            {
                id: 1,
                color: '#374760',
                rare: false
            },
            {
                id: 2,
                color: '#6a7b82',
                rare: false
            },
            {
                id: 3,
                color: '#97b5ad',
                rare: false
            },
            {
                id: 4,
                color: '#a5a486',
                rare: false
            },
            {
                id: 5,
                color: '#6b787e',
                rare: false
            },
            {
                id: 6,
                color: '#849197',
                rare: false
            },
            {
                id: 7,
                color: '#868f98',
                rare: false
            },
            {
                id: 8,
                color: '#adc1bf',
                rare: false
            },
            {
                id: 9,
                color: '#b0b39e',
                rare: false
            },
            {
                id: 10,
                color: '#959da0',
                rare: false
            },
            {
                id: 11,
                color: '#b1b8bc',
                rare: false
            },
            {
                id: 12,
                color: '#9ea2ab',
                rare: false
            },
            {
                id: 13,
                color: '#becbcc',
                rare: false
            },
            {
                id: 14,
                color: '#dce4e7',
                rare: false
            },
        ],
        bellyColors: [
            {
                id: 110,
                color: '#ffffff',
                rare: false
            },
            {
                id: 111,
                color: '#e3e6e6',
                rare: false
            },
            {
                id: 112,
                color: '#cbcece',
                rare: false
            },
        ]
    },
    {
        name: 'Civilized Northern',
        type: 'civilized-northern',
        eyeColors: [],
        coatColors: [
            {
                id: 15,
                color: '#000032',
                rare: false
            },
            {
                id: 16,
                color: '#374760',
                rare: false
            },
            {
                id: 17,
                color: '#6a7b82',
                rare: false
            },
            {
                id: 18,
                color: '#97b5ad',
                rare: false
            },
            {
                id: 19,
                color: '#a5a486',
                rare: false
            },
            {
                id: 20,
                color: '#29115a',
                rare: false
            },
            {
                id: 21,
                color: '#53567f',
                rare: false
            },
            {
                id: 22,
                color: '#838b9a',
                rare: false
            },
            {
                id: 23,
                color: '#a9c1c3',
                rare: false
            },
            {
                id: 24,
                color: '#adb69a',
                rare: false
            },
            {
                id: 25,
                color: '#542d68',
                rare: false
            },
            {
                id: 26,
                color: '#72698b',
                rare: false
            },
            {
                id: 27,
                color: '#9394a5',
                rare: false
            },
            {
                id: 28,
                color: '#b6c1c9',
                rare: false
            },
            {
                id: 29,
                color: '#b0bda9',
                rare: false
            },
            {
                id: 30,
                color: '#683ca4',
                rare: false
            },
            {
                id: 31,
                color: '#0a6f6b',
                rare: false
            },
            {
                id: 32,
                color: '#4b97ab',
                rare: false
            },
            {
                id: 33,
                color: '#a3aece',
                rare: false
            },
            {
                id: 34,
                color: '#bccdde',
                rare: false
            },
        ],
        bellyColors: [
            {
                id: 110,
                color: '#ffffff',
                rare: false
            },
            {
                id: 111,
                color: '#e3e6e6',
                rare: false
            },
            {
                id: 112,
                color: '#cbcece',
                rare: false
            },
        ]
    },
    {
        name: 'Western',
        type: 'western',
        eyeColors: [],
        coatColors: [
            {
                id: 35,
                color: '#20adb3',
                rare: false
            },
            {
                id: 36,
                color: '#105a65',
                rare: false
            },
            {
                id: 37,
                color: '#253d75',
                rare: false
            },
            {
                id: 38,
                color: '#2654b5',
                rare: false
            },
            {
                id: 39,
                color: '#683ca4',
                rare: false
            },
            {
                id: 40,
                color: '#30d688',
                rare: false
            },
            {
                id: 41,
                color: '#197955',
                rare: false
            },
            {
                id: 42,
                color: '#4b97ab',
                rare: false
            },
            {
                id: 43,
                color: '#6cdaf1',
                rare: false
            },
            {
                id: 44,
                color: '#7872e8',
                rare: false
            },
            {
                id: 45,
                color: '#8dc574',
                rare: false
            },
            {
                id: 46,
                color: '#80b045',
                rare: false
            },
            {
                id: 47,
                color: '#aac55b',
                rare: false
            },
            {
                id: 48,
                color: '#e4ecb5',
                rare: false
            },
            {
                id: 49,
                color: '#f9fde1',
                rare: false
            },
            {
                id: 50,
                color: '#983ca4',
                rare: false
            },
            {
                id: 51,
                color: '#9e62d7',
                rare: false
            },
            {
                id: 52,
                color: '#a97ec2',
                rare: false
            },
            {
                id: 53,
                color: '#ceb7ee',
                rare: false
            },
            {
                id: 54,
                color: '#f4e1fd',
                rare: false
            },
        ],
        bellyColors: [
            {
                id: 110,
                color: '#ffffff',
                rare: false
            },
            {
                id: 111,
                color: '#e3e6e6',
                rare: false
            },
            {
                id: 112,
                color: '#cbcece',
                rare: false
            },
        ]
    },
    {
        name: 'Eastern',
        type: 'eastern',
        eyeColors: [],
        coatColors: [
            {
                id: 55,
                color: '#12210f',
                rare: false
            },
            {
                id: 56,
                color: '#191919',
                rare: false
            },
            {
                id: 57,
                color: '#0c0414',
                rare: false
            },
            {
                id: 58,
                color: '#131128',
                rare: false
            },
            {
                id: 59,
                color: '#3d1d18',
                rare: false
            },
            {
                id: 60,
                color: '#374c33',
                rare: false
            },
            {
                id: 61,
                color: '#403d43',
                rare: false
            },
            {
                id: 62,
                color: '#2f223e',
                rare: false
            },
            {
                id: 63,
                color: '#393652',
                rare: false
            },
            {
                id: 64,
                color: '#63411c',
                rare: false
            },
            {
                id: 65,
                color: '#515151',
                rare: false
            },
            {
                id: 66,
                color: '#444345',
                rare: false
            },
            {
                id: 67,
                color: '#3e3a43',
                rare: false
            },
            {
                id: 68,
                color: '#4e4e56',
                rare: false
            },
            {
                id: 69,
                color: '#51473d',
                rare: false
            },
            //Rare Colors
            {
                id: 70,
                color: '#c9d92b',
                rare: true
            },
            {
                id: 71,
                color: '#9cab3a',
                rare: true
            },
            {
                id: 72,
                color: '#7d7a4f',
                rare: true
            },
            {
                id: 73,
                color: '#d9c52b',
                rare: true
            },
            {
                id: 74,
                color: '#bd9237',
                rare: true
            },
        ],
        bellyColors: [
            {
                id: 110,
                color: '#ffffff',
                rare: false
            },
            {
                id: 111,
                color: '#e3e6e6',
                rare: false
            },
            {
                id: 112,
                color: '#cbcece',
                rare: false
            },
        ]
    },
    {
        name: 'Pure Southern',
        type: 'pure-southern',
        eyeColors: [],
        coatColors: [
            {
                id: 75,
                color: '#2f1705',
                rare: false
            },
            {
                id: 76,
                color: '#472308',
                rare: false
            },
            {
                id: 77,
                color: '#63300a',
                rare: false
            },
            {
                id: 78,
                color: '#6d4221',
                rare: false
            },
            {
                id: 79,
                color: '#805c41',
                rare: false
            },
            {
                id: 80,
                color: '#532413',
                rare: false
            },
            {
                id: 81,
                color: '#6b3421',
                rare: false
            },
            {
                id: 82,
                color: '#7c4330',
                rare: false
            },
            {
                id: 83,
                color: '#913c2b',
                rare: false
            },
            {
                id: 84,
                color: '#a75741',
                rare: false
            },
            {
                id: 85,
                color: '#876a2a',
                rare: false
            },
            {
                id: 86,
                color: '#9d8242',
                rare: false
            },
            {
                id: 87,
                color: '#a59161',
                rare: false
            },
            {
                id: 88,
                color: '#b09e78',
                rare: false
            },
            {
                id: 89,
                color: '#bbab8a',
                rare: false
            },
        ],
        bellyColors: [
            {
                id: 113,
                color: '#fbf8f0',
                rare: false
            },
            {
                id: 114,
                color: '#fdf5cf',
                rare: false
            },
            {
                id: 115,
                color: '#e1ddc6',
                rare: false
            },
            {
                id: 116,
                color: '#cec69d',
                rare: false
            },
        ]
    },
    {
        name: 'Civilized Southern',
        type: 'civilized-southern',
        eyeColors: [],
        coatColors: [
            {
                id: 90,
                color: '#682426',
                rare: false
            },
            {
                id: 91,
                color: '#ac403d',
                rare: false
            },
            {
                id: 92,
                color: '#d69787',
                rare: false
            },
            {
                id: 93,
                color: '#ceac78',
                rare: false
            },
            {
                id: 94,
                color: '#e0d0bc',
                rare: false
            },
            {
                id: 95,
                color: '#471408',
                rare: false
            },
            {
                id: 96,
                color: '#9e3713',
                rare: false
            },
            {
                id: 97,
                color: '#dfae3f',
                rare: false
            },
            {
                id: 98,
                color: '#e6ce7e',
                rare: false
            },
            {
                id: 99,
                color: '#f1e8b7',
                rare: false
            },
            {
                id: 100,
                color: '#7a6d22',
                rare: false
            },
            {
                id: 101,
                color: '#8d9036',
                rare: false
            },
            {
                id: 102,
                color: '#bfc221',
                rare: false
            },
            {
                id: 103,
                color: '#f0e435',
                rare: false
            },
            {
                id: 104,
                color: '#fffaac',
                rare: false
            },
            {
                id: 105,
                color: '#a68635',
                rare: false
            },
            {
                id: 106,
                color: '#d9b028',
                rare: false
            },
            {
                id: 107,
                color: '#ffe23b',
                rare: false
            },
            {
                id: 108,
                color: '#f1f35c',
                rare: false
            },
            {
                id: 109,
                color: '#fff5d4',
                rare: false
            },
        ],
        bellyColors: [
            {
                id: 113,
                color: '#fbf8f0',
                rare: false
            },
            {
                id: 114,
                color: '#fdf5cf',
                rare: false
            },
            {
                id: 115,
                color: '#e1ddc6',
                rare: false
            },
            {
                id: 116,
                color: '#cec69d',
                rare: false
            },
        ]
    }
];
var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService.prototype.getSergalList = function () { return SERGAL_DATA; };
    AppService.prototype.getSergal = function (type) { return SERGAL_DATA.find(function (sergal) { return sergal.type === type; }); };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/color-palette/color-palette.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"palette-name\"\n    (click)=\"active = !active;\">{{name}}</h3>\n<div>\n  <h4 class=\"color-group-name\">Common colors</h4>\n  <ul class=\"color-palette\">\n    <li class=\"color-palette-item\"\n        *ngFor=\"let cColor of commonColors\"\n        [ngClass]=\"{ 'active': cColor.id === selectedColor.id }\"\n        [ngStyle]=\"{ 'background-color': cColor.color }\"\n        (click)=\"selectColor(cColor)\"></li>\n  </ul>\n</div>\n<div *ngIf=\"rareColors?.length\">\n  <h4 class=\"color-group-name\">Rare colors</h4>\n  <ul class=\"color-palette\">\n    <li class=\"color-palette-item\"\n        *ngFor=\"let rColor of rareColors\"\n        [ngStyle]=\"{ 'background-color': rColor.color }\"\n        (click)=\"selectColor(rColor)\"></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/color-palette/color-palette.component.scss":
/***/ (function(module, exports) {

module.exports = "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after, q:before, q:after {\n    content: '';\n    content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n/* #### Generated By: http://www.cufonfonts.com #### */\n@font-face {\n  font-family: 'LuzSans-Book';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/luzsans-book/LUZRO.TTF\"), url(\"/assets/fonts/luzsans-book/LUZRO.woff\") format(\"woff\"); }\n:host {\n  height: 320px;\n  display: inline-block;\n  position: relative;\n  font-family: \"LuzSans-Book\";\n  color: #FFF;\n  float: left;\n  margin: 40px;\n  -webkit-transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1); }\n:host:before {\n    content: \"\";\n    width: 320px;\n    height: 400px;\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 0;\n    background-color: #646464;\n    -webkit-transition: 0.5s ease;\n    transition: 0.5s ease;\n    -webkit-transform:  scale(1, 1) rotateZ(-6deg) translate(-16px, -32px);\n    transform:  scale(1, 1) rotateZ(-6deg) translate(-16px, -32px); }\n:host(.active) {\n  margin-top: -250px; }\n.palette-name {\n  font-size: 22px;\n  line-height: 1.5;\n  position: inherit;\n  padding-bottom: 10px;\n  cursor: pointer; }\n.color-group-name {\n  line-height: 1;\n  font-size: 16px;\n  padding-left: 15px;\n  position: relative; }\n.color-palette {\n  padding: 10px;\n  width: 250px;\n  position: relative;\n  list-style: none; }\n.color-palette-item {\n    width: 40px;\n    height: 40px;\n    margin: 5px 5px 0;\n    border: 0px solid transparent;\n    display: inline-block;\n    position: inherit;\n    cursor: pointer;\n    -webkit-transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);\n    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1); }\n.color-palette-item.active {\n      width: 36px;\n      height: 36px;\n      border: 2px #FFF solid; }\n"

/***/ }),

/***/ "./src/app/color-palette/color-palette.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPaletteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorPaletteComponent = /** @class */ (function () {
    function ColorPaletteComponent() {
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.active = false;
    }
    ColorPaletteComponent.prototype.ngOnInit = function () {
        this.commonColors = this.colorList.filter(function (color) { return !color.rare; });
        this.rareColors = this.colorList.filter(function (color) { return color.rare; });
        if (!this.selectedColor) {
            this.selectColor(this.commonColors[0]);
        }
    };
    ColorPaletteComponent.prototype.selectColor = function (color) {
        this.selectedColor = color;
        this.onSelect.emit(color);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ColorPaletteComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('color-list'),
        __metadata("design:type", Array)
    ], ColorPaletteComponent.prototype, "colorList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ColorPaletteComponent.prototype, "onSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.active'),
        __metadata("design:type", Boolean)
    ], ColorPaletteComponent.prototype, "active", void 0);
    ColorPaletteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'color-palette',
            template: __webpack_require__("./src/app/color-palette/color-palette.component.html"),
            styles: [__webpack_require__("./src/app/color-palette/color-palette.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ColorPaletteComponent);
    return ColorPaletteComponent;
}());



/***/ }),

/***/ "./src/app/custom-reuse-strategy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomReuseStrategy; });
var CustomReuseStrategy = /** @class */ (function () {
    function CustomReuseStrategy() {
        this.handlers = {};
    }
    CustomReuseStrategy.prototype.calcKey = function (route) {
        var next = route;
        var url = "";
        while (next) {
            if (next.url) {
                url = next.url.join('/');
            }
            next = next.firstChild;
        }
        console.debug('url', url);
        return url;
    };
    CustomReuseStrategy.prototype.shouldDetach = function (route) {
        //console.debug('CustomReuseStrategy:shouldDetach', route);
        return true;
    };
    CustomReuseStrategy.prototype.store = function (route, handle) {
        //console.debug('CustomReuseStrategy:store', route, handle);
        this.handlers[this.calcKey(route)] = handle;
    };
    CustomReuseStrategy.prototype.shouldAttach = function (route) {
        //console.debug('CustomReuseStrategy:shouldAttach', route);
        return !!route.routeConfig && !!this.handlers[this.calcKey(route)];
    };
    CustomReuseStrategy.prototype.retrieve = function (route) {
        //console.debug('CustomReuseStrategy:retrieve', route);
        if (!route.routeConfig)
            return null;
        return this.handlers[this.calcKey(route)];
    };
    CustomReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        //console.debug('CustomReuseStrategy:shouldReuseRoute', future, curr);
        return this.calcKey(curr) === this.calcKey(future);
    };
    return CustomReuseStrategy;
}());



/***/ }),

/***/ "./src/app/sergal-detail/sergal-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sergal {{type}}\">\n  <div class=\"side\"\n        *ngIf=\"type\">\n    <img class=\"lines\"\n         [src]=\"'./assets/images/' + type + '/side.png'\"/>\n    <div class=\"coat\"\n         *ngIf=\"selectedCoat\"\n         [ngStyle]=\"{ 'background-color': selectedCoat?.color }\"></div>\n    <div class=\"belly\"\n         *ngIf=\"selectedBelly\"\n         [ngStyle]=\"{ 'background-color': selectedBelly?.color }\"></div>\n  </div>\n  <pre class=\"color-code\">\n    Coat: {{selectedCoat?.color.toUpperCase()}}\n    Belly: {{selectedBelly?.color.toUpperCase()}}\n  </pre>\n</div>\n<color-palette [name]=\"'Coat'\"\n               [color-list]=\"data.coatColors\"\n               (onSelect)=\"updateCoat($event)\"></color-palette>\n<color-palette [name]=\"'Belly'\"\n               [color-list]=\"data.bellyColors\"\n               (onSelect)=\"updateBelly($event)\"></color-palette>\n"

/***/ }),

/***/ "./src/app/sergal-detail/sergal-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after, q:before, q:after {\n    content: '';\n    content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n/* #### Generated By: http://www.cufonfonts.com #### */\n@font-face {\n  font-family: 'LuzSans-Book';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/luzsans-book/LUZRO.TTF\"), url(\"/assets/fonts/luzsans-book/LUZRO.woff\") format(\"woff\"); }\n:host {\n  height: calc(100% - 100px);\n  display: block;\n  overflow: hidden; }\n.title {\n  font-size: 40px;\n  padding: 30px;\n  font-family: \"LuzSans-Book\";\n  text-align: center; }\n.sergal {\n  height: calc(100% - 80px);\n  text-align: center;\n  margin: auto; }\n.side {\n  height: 600px;\n  margin: auto;\n  position: relative;\n  display: inline-block; }\n.lines {\n  height: 100%;\n  mix-blend-mode: multiply;\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease; }\n.coat,\n.belly {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  mix-blend-mode: multiply;\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease; }\n.pure-northern .coat {\n  -webkit-mask-image: url('coat.4f707d1ea5c9ba90b185.png');\n          mask-image: url('coat.4f707d1ea5c9ba90b185.png');\n  -webkit-mask-size: 101%;\n          mask-size: 101%; }\n.pure-northern .belly {\n  -webkit-mask-image: url('belly.ff01361321ba9ee5862a.png');\n          mask-image: url('belly.ff01361321ba9ee5862a.png');\n  -webkit-mask-size: 101%;\n          mask-size: 101%; }\n.civilized-northern .coat {\n  -webkit-mask-image: url('coat.aa75d3a7b313bddabe7c.png');\n          mask-image: url('coat.aa75d3a7b313bddabe7c.png'); }\n.civilized-northern .belly {\n  -webkit-mask-image: url('belly.193d903f7b9446bf8fb3.png');\n          mask-image: url('belly.193d903f7b9446bf8fb3.png'); }\n.western .coat {\n  -webkit-mask-image: url('coat.e9a70e8807be79d3f633.png');\n          mask-image: url('coat.e9a70e8807be79d3f633.png');\n  -webkit-mask-position: 3px 0;\n          mask-position: 3px 0; }\n.western .belly {\n  -webkit-mask-image: url('belly.a6729ab0e6793f51b4d1.png');\n          mask-image: url('belly.a6729ab0e6793f51b4d1.png');\n  -webkit-mask-position: 3px 0;\n          mask-position: 3px 0; }\n.eastern .coat {\n  -webkit-mask-image: url('coat.87a871cea31a6b8f17e3.png');\n          mask-image: url('coat.87a871cea31a6b8f17e3.png');\n  -webkit-mask-position: 1px 0;\n          mask-position: 1px 0; }\n.eastern .belly {\n  -webkit-mask-image: url('belly.454b126b5b143771e916.png');\n          mask-image: url('belly.454b126b5b143771e916.png');\n  -webkit-mask-position: 1px 0;\n          mask-position: 1px 0; }\n.pure-southern .coat {\n  -webkit-mask-image: url('coat.6ae5dfa836ad2687732c.png');\n          mask-image: url('coat.6ae5dfa836ad2687732c.png'); }\n.pure-southern .belly {\n  -webkit-mask-image: url('belly.3a790c5886a86556f6b6.png');\n          mask-image: url('belly.3a790c5886a86556f6b6.png'); }\n.civilized-southern .coat {\n  -webkit-mask-image: url('coat.30d35d575ab8aa025a69.png');\n          mask-image: url('coat.30d35d575ab8aa025a69.png');\n  -webkit-mask-position: -7px 0;\n          mask-position: -7px 0; }\n.civilized-southern .belly {\n  -webkit-mask-image: url('belly.12ad8268f648c68a46be.png');\n          mask-image: url('belly.12ad8268f648c68a46be.png');\n  -webkit-mask-position: -7px 0;\n          mask-position: -7px 0; }\n.color-code {\n  font-family: \"LuzSans-Book\";\n  font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/sergal-detail/sergal-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SergalDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SergalDetailComponent = /** @class */ (function () {
    function SergalDetailComponent(route, appService) {
        this.route = route;
        this.appService = appService;
        this.type = '';
    }
    SergalDetailComponent.prototype.ngOnInit = function () {
        this.type = this.route.snapshot.paramMap.get('type');
        this.data = this.appService.getSergal(this.type);
    };
    SergalDetailComponent.prototype.updateCoat = function (color) { this.selectedCoat = color; };
    SergalDetailComponent.prototype.updateBelly = function (color) { this.selectedBelly = color; };
    SergalDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sergal-detail',
            template: __webpack_require__("./src/app/sergal-detail/sergal-detail.component.html"),
            styles: [__webpack_require__("./src/app/sergal-detail/sergal-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]])
    ], SergalDetailComponent);
    return SergalDetailComponent;
}());



/***/ }),

/***/ "./src/app/sergal-list/sergal-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"sergal-list\">\n  <li class=\"sergal-list-item\"\n      routerLinkActive=\"active\"\n      *ngFor=\"let sergal of data\">\n    <a [routerLink]=\"['/', sergal.type]\">{{sergal.name}}</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/sergal-list/sergal-list.component.scss":
/***/ (function(module, exports) {

module.exports = "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after, q:before, q:after {\n    content: '';\n    content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n/* #### Generated By: http://www.cufonfonts.com #### */\n@font-face {\n  font-family: 'LuzSans-Book';\n  font-style: normal;\n  font-weight: normal;\n  src: url(\"/assets/fonts/luzsans-book/LUZRO.TTF\"), url(\"/assets/fonts/luzsans-book/LUZRO.woff\") format(\"woff\"); }\n:host {\n  position: absolute;\n  top: 0;\n  left: 0; }\n.sergal-list {\n  padding: 20px;\n  position: relative;\n  font-family: \"LuzSans-Book\";\n  list-style: none;\n  z-index: 999; }\n.sergal-list:before {\n    content: \"\";\n    width: 300px;\n    height: 350px;\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 0;\n    background-color: #646464;\n    -webkit-transform:  scale(1, 1) rotateZ(19deg) translate(-65px, -60px);\n    transform:  scale(1, 1) rotateZ(19deg) translate(-65px, -60px);\n    -webkit-transition: 0.5s ease;\n    transition: 0.5s ease; }\n.sergal-list-item {\n    font-size: 24px;\n    line-height: 1.5;\n    font-family: \"LuzSans-Book\";\n    position: inherit;\n    -webkit-transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);\n    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1); }\n.sergal-list-item a:link,\n    .sergal-list-item a:active,\n    .sergal-list-item a:visited {\n      color: #FFF;\n      text-decoration: none; }\n.sergal-list-item.active {\n      font-weight: bold;\n      padding-left: 10px; }\n"

/***/ }),

/***/ "./src/app/sergal-list/sergal-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SergalListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SergalListComponent = /** @class */ (function () {
    function SergalListComponent() {
        this.closed = true;
    }
    SergalListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], SergalListComponent.prototype, "data", void 0);
    SergalListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sergal-list',
            template: __webpack_require__("./src/app/sergal-list/sergal-list.component.html"),
            styles: [__webpack_require__("./src/app/sergal-list/sergal-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SergalListComponent);
    return SergalListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map