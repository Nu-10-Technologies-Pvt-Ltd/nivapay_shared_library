import { convert } from 'ethereumjs-units';
import Decimal from 'decimal.js';
import { divide, multiply } from './math';

export enum ETH_CONVERT_UNITS {
    wei = 'wei',
    gwei = 'gwei',
    ether = 'ether'
}

export function eth_convert(value, unitFrom, unitTo){
    const decimalNumber = new Decimal(value);
    return convert(decimalNumber, unitFrom, unitTo)
}

export function sathoshis_to_BTC(value){
    const sathoshi = new Decimal(value);
    const divisor = new Decimal('100000000')
    return divide(sathoshi, divisor)
}

export function BTC_to_sathoshis(value){
    const btc = new Decimal(value);
    const multiplier = new Decimal('100000000')
    return multiply(btc, multiplier)
}

