import Units from 'ethereumjs-units'
import Decimal from 'decimal.js';
import { divide } from './math';

export function eth_convert(value, unitFrom, unitTo){
    const decimalNumber = new Decimal(value);
    return Units.convert(decimalNumber, unitFrom, unitTo)
}

export function sathoshis_to_BTC(value){
    const sathoshi = new Decimal(value);
    const divisor = new Decimal('100000000')
    return divide(sathoshi, divisor)
}