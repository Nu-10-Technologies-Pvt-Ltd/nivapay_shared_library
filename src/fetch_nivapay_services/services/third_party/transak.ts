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

export async function getFiatCurrencyDetailsByNVPFiatCurrencyId(
    env: string,
    api_key: string,
    query: {fiat_currency_id: string}
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
    query: {fiat_currency_ids: string[]}
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