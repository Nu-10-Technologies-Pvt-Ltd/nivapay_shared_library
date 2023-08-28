"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundDownToDecimalPlaces = exports.roundUpToDecimalPlaces = void 0;
function roundUpToDecimalPlaces(number, decimalPlaces) {
    const multiplier = Math.pow(10, decimalPlaces);
    return Math.ceil(number * multiplier) / multiplier;
}
exports.roundUpToDecimalPlaces = roundUpToDecimalPlaces;
function roundDownToDecimalPlaces(number, decimalPlaces) {
    const multiplier = Math.pow(10, decimalPlaces);
    return Math.floor(number * multiplier) / multiplier;
}
exports.roundDownToDecimalPlaces = roundDownToDecimalPlaces;
//# sourceMappingURL=rounding.js.map