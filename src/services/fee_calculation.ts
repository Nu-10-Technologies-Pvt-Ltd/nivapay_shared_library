import { FetchNivapayServices } from '..';
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

export async function network_fee(networkFeeAmount: string, networkFeeCurrencyId: string, transaction_currency_id: string){
    if(networkFeeCurrencyId.toLowerCase() === transaction_currency_id.toLowerCase()){
        return networkFeeAmount
    }
    else{
        const to_transaction_currency = (
            await FetchNivapayServices.third_party.cmc.rateConversion(
                this.env,
                this.i_api_key,
                {
                    amount: Number(networkFeeAmount),
                    id: networkFeeCurrencyId,
                    convertToId: transaction_currency_id
                },
            )
        ).data.price;

        return to_transaction_currency
    }
}