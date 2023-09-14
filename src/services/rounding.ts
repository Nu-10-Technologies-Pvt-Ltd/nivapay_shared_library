import Decimal from "decimal.js";

export function roundUpToDecimalPlaces(numberStr, decimalPlacesStr) {
    const decimalNumber = new Decimal(parseFloat(numberStr));
    const decimalPlaces = parseInt(decimalPlacesStr);
    const rounded = decimalNumber.toFixed(decimalPlaces, Decimal.ROUND_UP);
    return rounded.toString();
}

export function roundDownToDecimalPlaces(numberStr, decimalPlacesStr) {
    const decimalNumber = new Decimal(parseFloat(numberStr));
    const decimalPlaces = parseInt(decimalPlacesStr);
    const rounded = decimalNumber.toFixed(decimalPlaces, Decimal.ROUND_DOWN);
    return parseFloat(rounded);
}

// export function roundUpToDecimalPlaces(number: number, decimalPlaces: number): number {
//     const multiplier = Math.pow(10, decimalPlaces);
//     return Math.ceil(number * multiplier) / multiplier;
// }

// export function roundDownToDecimalPlaces(number: number, decimalPlaces: number): number {
//     const multiplier = Math.pow(10, decimalPlaces);
//     return Math.floor(number * multiplier) / multiplier;
// } 