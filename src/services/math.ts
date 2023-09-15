import Decimal from "decimal.js";
import bigDecimal from "js-big-decimal";

export function roundUpToDecimalPlaces(numberStr, decimalPlacesStr) {
    const decimalNumber = new Decimal(parseFloat(numberStr));
    const decimalPlaces = parseInt(decimalPlacesStr);
    const rounded = decimalNumber.toFixed(decimalPlaces, Decimal.ROUND_UP);
    return {
        resultAsString : rounded.toString(),
        resultAsNumber : parseFloat(rounded)
    }
}

// export function roundDownToDecimalPlaces(numberStr, decimalPlacesStr) {
//     const decimalNumber = new Decimal(parseFloat(numberStr));
//     const decimalPlaces = parseInt(decimalPlacesStr);
//     const rounded = decimalNumber.toFixed(decimalPlaces, Decimal.ROUND_DOWN);
    // return {
    //     resultAsString : rounded.toString(),
    //     resultAsNumber : parseFloat(rounded)
    // }
// }

export function roundDownToDecimalPlaces(numberStr, decimalPlacesStr) {
    const decimalNumber = new bigDecimal(numberStr);
    const decimalPlaces = parseInt(decimalPlacesStr);
    const rounded = decimalNumber.round(decimalPlaces, bigDecimal.RoundingModes.DOWN)

    return {
        resultAsString : rounded.toString(),
        resultAsNumber : parseFloat(rounded.toString())
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