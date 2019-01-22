"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ReceptenComponent = /** @class */ (function () {
    function ReceptenComponent(ReceptenService) {
        this.ReceptenService = ReceptenService;
    }
    ReceptenComponent.prototype.ngOnInit = function () {
        this.recept = new forms_1.FormGroup({
            naam: new forms_1.FormControl(''),
            calori: calori, n: new forms_1.FormControl(''),
            tijdInMin: new forms_1.FormControl(0)
        });
    };
    ReceptenComponent.prototype.onSubmit = function () {
        this.ReceptenService.addRecept(this.recept.value.naam, this.recept.value.calori, n, this.recept.value.tijdInMin);
    };
    ReceptenComponent = __decorate([
        core_1.Component({
            selector: 'recepten',
            templateUrl: './recepten.component.html'
        })
    ], ReceptenComponent);
    return ReceptenComponent;
}());
exports.ReceptenComponent = ReceptenComponent;
