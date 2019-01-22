"use strict";
var Recepten = (function () {
    function Recepten(naam, calorien, tijdInMin) {
        this.naam = naam;
        this.calorien = calorien;
        this.tijdInMin = tijdInMin;
    }
    Recepten.prototype.toForm = function () {
        return "naam=" + this.naam + "&calorien=" + this.calorien + "&tijdInMin=" + this.tijdInMin;
    };
    return Recepten;
}());
exports.Recepten = Recepten;
//# sourceMappingURL=recepten.js.map