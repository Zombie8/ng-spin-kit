"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var spinner_component_1 = require("./spinner/spinner.component");
exports.SpinnerComponent = spinner_component_1.SpinnerComponent;
var rotating_plane_component_1 = require("./spinner/rotating-plane.component");
exports.RotatingPlaneComponent = rotating_plane_component_1.RotatingPlaneComponent;
var double_bounce_component_1 = require("./spinner/double-bounce.component");
exports.DoubleBounceComponent = double_bounce_component_1.DoubleBounceComponent;
var wave_component_1 = require("./spinner/wave.component");
exports.WaveComponent = wave_component_1.WaveComponent;
var wandering_cubes_component_1 = require("./spinner/wandering-cubes.component");
exports.WanderingCubesComponent = wandering_cubes_component_1.WanderingCubesComponent;
var pulse_component_1 = require("./spinner/pulse.component");
exports.PulseComponent = pulse_component_1.PulseComponent;
var chasing_dots_component_1 = require("./spinner/chasing-dots.component");
exports.ChasingDotsComponent = chasing_dots_component_1.ChasingDotsComponent;
var circle_component_1 = require("./spinner/circle.component");
exports.CircleComponent = circle_component_1.CircleComponent;
var three_bounce_component_1 = require("./spinner/three-bounce.component");
exports.ThreeBounceComponent = three_bounce_component_1.ThreeBounceComponent;
var cube_grid_component_1 = require("./spinner/cube-grid.component");
exports.CubeGridComponent = cube_grid_component_1.CubeGridComponent;
var word_press_component_1 = require("./spinner/word-press.component");
exports.WordPressComponent = word_press_component_1.WordPressComponent;
var fading_circle_component_1 = require("./spinner/fading-circle.component");
exports.FadingCircleComponent = fading_circle_component_1.FadingCircleComponent;
var folding_cube_component_1 = require("./spinner/folding-cube.component");
exports.FoldingCubeComponent = folding_cube_component_1.FoldingCubeComponent;
var NG_SPIN_KIT_COMPONENTS = [
    spinner_component_1.SpinnerComponent,
    rotating_plane_component_1.RotatingPlaneComponent,
    double_bounce_component_1.DoubleBounceComponent,
    wave_component_1.WaveComponent,
    wandering_cubes_component_1.WanderingCubesComponent,
    pulse_component_1.PulseComponent,
    chasing_dots_component_1.ChasingDotsComponent,
    circle_component_1.CircleComponent,
    three_bounce_component_1.ThreeBounceComponent,
    cube_grid_component_1.CubeGridComponent,
    word_press_component_1.WordPressComponent,
    fading_circle_component_1.FadingCircleComponent,
    folding_cube_component_1.FoldingCubeComponent
];
var NgSpinKitModule = (function () {
    function NgSpinKitModule() {
    }
    NgSpinKitModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: NG_SPIN_KIT_COMPONENTS,
            exports: NG_SPIN_KIT_COMPONENTS,
        })
    ], NgSpinKitModule);
    return NgSpinKitModule;
}());
exports.NgSpinKitModule = NgSpinKitModule;
//# sourceMappingURL=spinners.js.map