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
var WordPressComponent = (function (_super) {
    __extends(WordPressComponent, _super);
    function WordPressComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WordPressComponent = __decorate([
        core_1.Component({
            selector: 'sk-word-press',
            styles: ["\n    .word-press-spinner {\n      position: relative;\n      margin: 25px auto;\n      width: 30px;\n      height: 30px;\n      border-radius: 30px;\n      \n      -webkit-animation: inner-circle 1s linear infinite;\n      animation: inner-circle 1s linear infinite;\n    }\n    \n    .inner-circle {\n      position: absolute;\n      top: 5px;\n      left: 5px;\n      display: block;\n      width: 8px;\n      height: 8px;\n      border-radius: 8px;\n      background: #fff;\n    }\n    \n    @-webkit-keyframes inner-circle {\n      0% {\n        -webkit-transform: rotate(0);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n      }\n    }\n    \n    @keyframes inner-circle {\n      0% {\n        transform: rotate(0);\n        -webkit-transform: rotate(0);\n      }\n      100% {\n        transform: rotate(360deg);\n        -webkit-transform: rotate(360deg);\n      }\n    }\n  "],
            template: "\n    <div [hidden]=\"!visible\" class=\"word-press-spinner\" [style.backgroundColor]=\"color\">\n      <span class=\"inner-circle\"></span>\n    </div>\n  "
        })
    ], WordPressComponent);
    return WordPressComponent;
}(spinner_component_1.SpinnerComponent));
exports.WordPressComponent = WordPressComponent;
//# sourceMappingURL=word-press.component.js.map