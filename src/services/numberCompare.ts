import Decimal from "decimal.js";
import { BigNumber } from 'bignumber.js'

export function isGreaterThan(numberOne, numberTwo){
    const decimalNumberOne = new Decimal(numberOne);
    const decimalNumberTwo = new Decimal(numberTwo);
    if (decimalNumberOne.greaterThan(decimalNumberTwo)) {
        return true
    }
    else{
        return false
    }
}

export function isGreaterThanOrEqual(numberOne, numberTwo){
    const decimalNumberOne = new Decimal(numberOne);
    const decimalNumberTwo = new Decimal(numberTwo);
    if (decimalNumberOne.greaterThanOrEqualTo(decimalNumberTwo)) {
        return true
    }
    else{
        return false
    }
}

export function isLesserThan(numberOne, numberTwo){
    const decimalNumberOne = new Decimal(numberOne);
    const decimalNumberTwo = new Decimal(numberTwo);
    if (decimalNumberOne.lessThan(decimalNumberTwo)) {
        return true
    }
    else{
        return false
    }
}

export function isLesserThanOrEqual(numberOne, numberTwo){
    const decimalNumberOne = new Decimal(numberOne);
    const decimalNumberTwo = new Decimal(numberTwo);
    if (decimalNumberOne.lessThanOrEqualTo(decimalNumberTwo)) {
        return true
    }
    else{
        return false
    }
}

export function isEqual(numberOne, numberTwo){
    const decimalNumberOne = new Decimal(numberOne);
    const decimalNumberTwo = new Decimal(numberTwo);
    if (decimalNumberOne.equals(decimalNumberTwo)) {
        return true
    }
    else{
        return false
    }
}