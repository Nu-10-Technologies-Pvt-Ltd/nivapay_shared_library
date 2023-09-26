import Decimal from "decimal.js";
import { BigNumber } from 'bignumber.js'

export function roundUpToDecimalPlaces(numberIp, decimalPlacesIp) {
    const decimalNumber = new Decimal(parseFloat(numberIp));
    const decimalPlaces = parseInt(decimalPlacesIp);
    const rounded = decimalNumber.toFixed(decimalPlaces, Decimal.ROUND_UP);
    return {
        resultAsString: rounded.toString(),
        resultAsNumber: parseFloat(rounded),
        resultAsNumberString: `${parseFloat(rounded)}`
    }
}

export function roundDownToDecimalPlaces(numberIp, decimalPlacesIp) {
    const decimalNumber = new Decimal(parseFloat(numberIp));
    const decimalPlaces = parseInt(decimalPlacesIp);
    const rounded = decimalNumber.toFixed(decimalPlaces, Decimal.ROUND_DOWN);
    return {
        resultAsString: rounded.toString(),
        resultAsNumber: parseFloat(rounded),
        resultAsNumberString: `${parseFloat(rounded)}`
    }
}

export function roundUpToNearestInteger(numberIp) {
    const decimalNumber = new Decimal(numberIp);
    const rounded = decimalNumber.ceil();
    return {
        resultAsString: rounded.toString(),
        resultAsNumber: rounded.toNumber()
    }
}

export function multiply(numberOne, numberTwo) {
    const currentValue = new Decimal(numberOne);
    const result = currentValue.times(new Decimal(numberTwo));
    return {
        resultAsString: result.toString(),
        resultAsNumber: result.toNumber()
    }
}

export function divide(dividendIp, divisorIp) {
    const dividend = new Decimal(dividendIp);
    const divisor = new Decimal(divisorIp);
    const result = dividend.dividedBy(divisor);
    return {
        resultAsString: result.toString(),
        resultAsNumber: result.toNumber()
    }
}

export function addition(numberOne, numberTwo) {
    const decimalOne = new Decimal(numberOne);
    const decimalTwo = new Decimal(numberTwo);
    const result = decimalOne.plus(decimalTwo);
    return {
        resultAsString: result.toString(),
        resultAsNumber: result.toNumber()
    }
}

export function subtraction(numberOne, numberTwo) {
    const decimalOne = new Decimal(numberOne);
    const decimalTwo = new Decimal(numberTwo);
    const result = decimalOne.minus(decimalTwo);
    return {
        resultAsString: result.toString(),
        resultAsNumber: result.toNumber()
    }
}


export function scientificToDecimal(scientificNotation) {
    const bigNumber = new BigNumber(scientificNotation);
    const decimalNumber = bigNumber.toFormat(Math.abs(bigNumber.e))
    return decimalNumber
}