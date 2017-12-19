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
var DoubleBounceComponent = (function (_super) {
    __extends(DoubleBounceComponent, _super);
    function DoubleBounceComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseClass = 'double-bounce-spinner';
        _this.childClass = 'double-bounce';
        _this.numItems = 2;
        return _this;
    }
    DoubleBounceComponent = __decorate([
        core_1.Component({
            selector: 'sk-double-bounce',
            styles: ["\n    .double-bounce-spinner {\n      position: relative;\n      margin: 25px auto;\n      width: 40px;\n      height: 40px;\n    }\n    \n    .double-bounce1,\n    .double-bounce2 {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      border-radius: 50%;\n      opacity: 0.6;\n      \n      -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n      animation: sk-bounce 2.0s infinite ease-in-out;\n    }\n    \n    .double-bounce2 {\n      -webkit-animation-delay: -1.0s;\n      animation-delay: -1.0s;\n    }\n    \n    @-webkit-keyframes sk-bounce {\n      0%, 100% {\n        -webkit-transform: scale(0.0);\n      }\n      50% {\n        -webkit-transform: scale(1.0);\n      }\n    }\n    \n    @keyframes sk-bounce {\n      0%, 100% {\n        transform: scale(0.0);\n        -webkit-transform: scale(0.0);\n      }\n      50% {\n        transform: scale(1.0);\n        -webkit-transform: scale(1.0);\n      }\n    }\n  "],
            template: spinner_component_1.SpinnerTemplate
        })
    ], DoubleBounceComponent);
    return DoubleBounceComponent;
}(spinner_component_1.SpinnerComponent));
exports.DoubleBounceComponent = DoubleBounceComponent;
//# sourceMappingURL=double-bounce.component.js.map