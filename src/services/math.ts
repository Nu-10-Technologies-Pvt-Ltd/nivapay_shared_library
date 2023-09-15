import Decimal from "decimal.js";

export function roundUpToDecimalPlaces(numberStr, decimalPlacesStr) {
    const decimalNumber = new Decimal(parseFloat(numberStr));
    const decimalPlaces = parseInt(decimalPlacesStr);
    const rounded = decimalNumber.toFixed(decimalPlaces, Decimal.ROUND_UP);
    return {
        resultAsString : rounded.toString(),
        resultAsNumber : parseFloat(rounded)
    }
}

export function roundDownToDecimalPlaces(numberStr, decimalPlacesStr) {
    const decimalNumber = new Decimal(parseFloat(numberStr));
    const decimalPlaces = parseInt(decimalPlacesStr);
    const rounded = decimalNumber.toFixed(decimalPlaces, Decimal.ROUND_DOWN);
    return {
        resultAsString : rounded.toString(),
        resultAsNumber : parseFloat(rounded)
    }
}

export function multiply(numberOne, numberTwo) {
    const currentValue = new Decimal(numberOne);
    const result = currentValue.times(new Decimal(numberTwo));
    return {
        resultAsString : result.toString(),
        resultAsNumber : result.toNumber()
    }
}

export function divide(dividendStr, divisorStr){
    const dividend = new Decimal(dividendStr); 
    const divisor = new Decimal(divisorStr); 
    const result = dividend.dividedBy(divisor);
    return {
        resultAsString : result.toString(),
        resultAsNumber : result.toNumber()
    }
}

// export function roundUpToDecimalPlaces(number: number, decimalPlaces: number): number {
//     const multiplier = Math.pow(10, decimalPlaces);
//     return Math.ceil(number * multiplier) / multiplier;
// }

// export function roundDownToDecimalPlaces(number: number, decimalPlaces: number): number {
//     const multiplier = Math.pow(10, decimalPlaces);
//     return Math.floor(number * multiplier) / multiplier;
// } 