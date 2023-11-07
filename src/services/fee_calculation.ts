import {multiply,divide} from './math';

export function service_fee(service_fee_config, transaction_amount) {
    if(service_fee_config.fee_unit === "percent"){
        return multiply(
            divide(service_fee_config.fee_value, 100).resultAsString,
            transaction_amount
        ).resultAsString;
    }
    else if(service_fee_config.fee_unit === "absolute"){
        return service_fee_config.fee_value
    }
}