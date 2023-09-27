import Units from 'ethereumjs-units'
import Decimal from 'decimal.js';

export function eth_convert(value, unitFrom, unitTo){
    const decimalNumber = new Decimal(value);
    return Units.convert(decimalNumber, unitFrom, unitTo)
}