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
var WaveComponent = (function (_super) {
    __extends(WaveComponent, _super);
    function WaveComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseClass = 'wave-spinner';
        _this.childClass = 'rect';
        _this.numItems = 5;
        return _this;
    }
    WaveComponent = __decorate([
        core_1.Component({
            selector: 'sk-wave',
            styles: ["\n    .wave-spinner {\n      margin: 25px auto;\n      width: 42px;\n      height: 40px;\n    }\n    \n    .wave-spinner > div {\n      display: inline-block;\n      width: 5px;\n      margin-right: 4px;\n      height: 100%;\n      \n      -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n      animation: sk-stretchdelay 1.2s infinite ease-in-out;\n    }\n    \n    .wave-spinner > div:last-child {\n      margin-right: 0;\n    }\n    \n    .wave-spinner .rect2 {\n      -webkit-animation-delay: -1.1s;\n      animation-delay: -1.1s;\n    }\n    \n    .wave-spinner .rect3 {\n      -webkit-animation-delay: -1.0s;\n      animation-delay: -1.0s;\n    }\n    \n    .wave-spinner .rect4 {\n      -webkit-animation-delay: -0.9s;\n      animation-delay: -0.9s;\n    }\n    \n    .wave-spinner .rect5 {\n      -webkit-animation-delay: -0.8s;\n      animation-delay: -0.8s;\n    }\n    \n    @-webkit-keyframes sk-stretchdelay {\n      0%, 40%, 100% {\n        -webkit-transform: scaleY(0.4);\n      }\n      20% {\n        -webkit-transform: scaleY(1.0);\n      }\n    }\n    \n    @keyframes sk-stretchdelay {\n      0%, 40%, 100% {\n        transform: scaleY(0.4);\n        -webkit-transform: scaleY(0.4);\n      }\n      20% {\n        transform: scaleY(1.0);\n        -webkit-transform: scaleY(1.0);\n      }\n    }\n  "],
            template: spinner_component_1.SpinnerTemplate
        })
    ], WaveComponent);
    return WaveComponent;
}(spinner_component_1.SpinnerComponent));
exports.WaveComponent = WaveComponent;
//# sourceMappingURL=wave.component.js.map