
import axios from 'axios';
import * as Config from '../../../config';

export async function getCryptoPaymentDetails(env: string, api_key: string, query: {
    order_id: string,
    crypto_currency_id?: string,
    amount?: string
}) {
    const host = Config.default.hosts.crypto_component[env];
    const response = await axios.post(
        `${host}/crypto/address`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function getMetamaskPaymentDetails(env: string, api_key: string, query: {
    order_id: string,
    crypto_currency_id?: string,
    amount?: string
}) {
    const host = Config.default.hosts.crypto_component[env];
    const response = await axios.post(
        `${host}/crypto/address/metamask`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function initiateTransaction(env: string, api_key: string, query: {
    order_id: string
}) {
    const host = Config.default.hosts.crypto_component[env];
    const response = await axios.get(
        `${host}/crypto/initiate/transaction/${query.order_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}