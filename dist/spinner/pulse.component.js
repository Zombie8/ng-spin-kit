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
var PulseComponent = (function (_super) {
    __extends(PulseComponent, _super);
    function PulseComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PulseComponent = __decorate([
        core_1.Component({
            selector: 'sk-pulse',
            styles: ["\n    .pulse-spinner {\n      margin: 25px auto;\n      width: 40px;\n      height: 40px;\n      border-radius: 100%;\n      \n      -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n      animation: sk-scaleout 1.0s infinite ease-in-out;\n    }\n    \n    @-webkit-keyframes sk-scaleout {\n      0% {\n        -webkit-transform: scale(0);\n      }\n      100% {\n        -webkit-transform: scale(1.0);\n        opacity: 0;\n      }\n    }\n    \n    @keyframes sk-scaleout {\n      0% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n      }\n      100% {\n        -webkit-transform: scale(1.0);\n        transform: scale(1.0);\n        opacity: 0;\n      }\n    }\n  "],
            template: "\n    <div [hidden]=\"!visible\" class=\"pulse-spinner\" [style.backgroundColor]=\"color\"></div>\n  "
        })
    ], PulseComponent);
    return PulseComponent;
}(spinner_component_1.SpinnerComponent));
exports.PulseComponent = PulseComponent;
//# sourceMappingURL=pulse.component.js.map