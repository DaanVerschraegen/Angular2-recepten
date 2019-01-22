"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var recepten_1 = require("./recepten");
var ReceptenService = /** @class */ (function () {
    function ReceptenService() {
        this.receptenServiceURI = 'http://localhost:4000';
    }
    // voeg aan localstorage indien nieuw recept (op basis van naam)
    ReceptenService.prototype.addRecept = function (naam, calori, n, tijdInMin) {
        var recept = new recepten_1.Recepten(naam, calori, n, tijdInMin);
        if (localStorage.getItem(recept) != null) {
            answer = localStorage.getItem(recept);
        }
        else {
            localStorage.setItem(naam, JSON.stringify(recept));
        }
    };
    ReceptenService = __decorate([
        core_1.Injectable()
    ], ReceptenService);
    return ReceptenService;
}());
exports.ReceptenService = ReceptenService;
