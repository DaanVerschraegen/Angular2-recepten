"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var recepten_1 = require("./recepten");
var ReceptenService = (function () {
    function ReceptenService() {
        this.receptenServiceURI = 'http://localhost:4000';
    }
    // voeg aan localstorage indien nieuw recept (op basis van naam)
    ReceptenService.prototype.addRecept = function (naam, calorien, tijdInMin) {
        var recept = new recepten_1.Recepten(naam, calorien, tijdInMin);
        if (localStorage.getItem(naam) != null) {
            recept = JSON.parse(localStorage.getItem(naam));
        }
        else {
            localStorage.setItem(naam, JSON.stringify(recept));
        }
    };
    ReceptenService.prototype.toonRecepten = function () {
        var result_list;
        var keys = Object.keys(localStorage);
        var aantalKeys = keys.length;
        while (aantalKeys--) {
            result_list.push(JSON.parse(localStorage.getItem(keys[aantalKeys])));
        }
        return result_list;
    };
    return ReceptenService;
}());
ReceptenService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ReceptenService);
exports.ReceptenService = ReceptenService;
//# sourceMappingURL=recepten.service.js.map