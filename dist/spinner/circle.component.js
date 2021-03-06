"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var spinner_component_1 = require("./spinner.component");
var CircleComponent = (function (_super) {
    __extends(CircleComponent, _super);
    function CircleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseClass = 'circle-spinner';
        _this.childClass = 'circle';
        _this.numItems = 12;
        return _this;
    }
    CircleComponent = __decorate([
        core_1.Component({
            selector: 'sk-circle',
            styles: ["\n    .circle-spinner {\n      position: relative;\n      margin: 25px auto;\n      width: 40px;\n      height: 40px;\n    }\n    \n    .circle-spinner > div {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: transparent !important;\n    }\n    \n    .circle-spinner div:before {\n      display: block;\n      margin: 0 auto;\n      width: 15%;\n      height: 15%;\n      border-radius: 100%;\n      background-color: #333;\n      content: '';\n      -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n      animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n    }\n    \n    .circle-spinner .circle2 {\n      -webkit-transform: rotate(30deg);\n      -ms-transform: rotate(30deg);\n      transform: rotate(30deg);\n    }\n    \n    .circle-spinner .circle3 {\n      -webkit-transform: rotate(60deg);\n      -ms-transform: rotate(60deg);\n      transform: rotate(60deg);\n    }\n    \n    .circle-spinner .circle4 {\n      -webkit-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n      transform: rotate(90deg);\n    }\n    \n    .circle-spinner .circle5 {\n      -webkit-transform: rotate(120deg);\n      -ms-transform: rotate(120deg);\n      transform: rotate(120deg);\n    }\n    \n    .circle-spinner .circle6 {\n      -webkit-transform: rotate(150deg);\n      -ms-transform: rotate(150deg);\n      transform: rotate(150deg);\n    }\n    \n    .circle-spinner .circle7 {\n      -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n      transform: rotate(180deg);\n    }\n    \n    .circle-spinner .circle8 {\n      -webkit-transform: rotate(210deg);\n      -ms-transform: rotate(210deg);\n      transform: rotate(210deg);\n    }\n    \n    .circle-spinner .circle9 {\n      -webkit-transform: rotate(240deg);\n      -ms-transform: rotate(240deg);\n      transform: rotate(240deg);\n    }\n    \n    .circle-spinner .circle10 {\n      -webkit-transform: rotate(270deg);\n      -ms-transform: rotate(270deg);\n      transform: rotate(270deg);\n    }\n    \n    .circle-spinner .circle11 {\n      -webkit-transform: rotate(300deg);\n      -ms-transform: rotate(300deg);\n      transform: rotate(300deg);\n    }\n    \n    .circle-spinner .circle12 {\n      -webkit-transform: rotate(330deg);\n      -ms-transform: rotate(330deg);\n      transform: rotate(330deg);\n    }\n    \n    .circle-spinner .circle2:before {\n      -webkit-animation-delay: -1.1s;\n      animation-delay: -1.1s;\n    }\n    \n    .circle-spinner .circle3:before {\n      -webkit-animation-delay: -1s;\n      animation-delay: -1s;\n    }\n    \n    .circle-spinner .circle4:before {\n      -webkit-animation-delay: -0.9s;\n      animation-delay: -0.9s;\n    }\n    \n    .circle-spinner .circle5:before {\n      -webkit-animation-delay: -0.8s;\n      animation-delay: -0.8s;\n    }\n    \n    .circle-spinner .circle6:before {\n      -webkit-animation-delay: -0.7s;\n      animation-delay: -0.7s;\n    }\n    \n    .circle-spinner .circle7:before {\n      -webkit-animation-delay: -0.6s;\n      animation-delay: -0.6s;\n    }\n    \n    .circle-spinner .circle8:before {\n      -webkit-animation-delay: -0.5s;\n      animation-delay: -0.5s;\n    }\n    \n    .circle-spinner .circle9:before {\n      -webkit-animation-delay: -0.4s;\n      animation-delay: -0.4s;\n    }\n    \n    .circle-spinner .circle10:before {\n      -webkit-animation-delay: -0.3s;\n      animation-delay: -0.3s;\n    }\n    \n    .circle-spinner .circle11:before {\n      -webkit-animation-delay: -0.2s;\n      animation-delay: -0.2s;\n    }\n    \n    .circle-spinner .circle12:before {\n      -webkit-animation-delay: -0.1s;\n      animation-delay: -0.1s;\n    }\n    \n    @-webkit-keyframes sk-circleBounceDelay {\n      0%, 80%, 100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n      }\n      40% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n      }\n    }\n    \n    @keyframes sk-circleBounceDelay {\n      0%, 80%, 100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n      }\n      40% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n      }\n    }\n  "],
            template: spinner_component_1.SpinnerTemplate
        })
    ], CircleComponent);
    return CircleComponent;
}(spinner_component_1.SpinnerComponent));
exports.CircleComponent = CircleComponent;
//# sourceMappingURL=circle.component.js.map