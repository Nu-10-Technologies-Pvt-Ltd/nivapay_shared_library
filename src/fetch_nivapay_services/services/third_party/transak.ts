/* eslint-disable prettier/prettier */
import axios from 'axios';
import * as Config from '../../../config';

export async function getAllFiatCurrencyDetails(
    env: string,
    api_key: string
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/transak/get/fiat/currencies`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}


export async function getFiatConversion(
    env: string,
    api_key: string,
    query: {
        test: boolean,
        fiat: string,
        crypto: string,
        type: string,
        network: string,
        paymentMethod: string,
        cryptoAmount: number
    }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/transak/get/fiat/conversion/?test=${query.test}&fiat=${query.fiat}&crypto=${query.crypto}&type=${query.type}&network=${query.network}&paymentMethod=${query.paymentMethod}&cryptoAmount=${query.cryptoAmount}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function getFiatCurrencyDetailsByNVPFiatCurrencyId(
    env: string,
    api_key: string,
    query: { fiat_currency_id: string }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/transak/get/fiat/currencies/by/nivapay_fiat_currency_id/${query.fiat_currency_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function getFiatCurrencyDetailsByNVPFiatCurrencyIdArray(
    env: string,
    api_key: string,
    query: { fiat_currency_ids: string[] }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/transak/get/fiat/currencies/by/nivapay_fiat_currency_id_array`,
        query.fiat_currency_ids,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}