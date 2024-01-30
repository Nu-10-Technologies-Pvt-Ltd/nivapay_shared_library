import axios from 'axios';
import * as Config from '../../../config';

export async function createOrder(env: string, api_key: string, query: {
    crypto_currency_id: string,
    merchant_id: string,
    merchant_user_id: string,
    amount: string
}) {
    const host = Config.default.hosts.crypto_component[env];
    const response = await axios.post(
        `${host}/order/create`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function getOrderDetails(env: string, api_key: string, query: { order_id: string }) {
    const host = Config.default.hosts.crypto_component[env];
    const response = await axios.get(
        `${host}/order/details/${query.order_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function getOrderStatus(env: string, api_key: string, query: { order_id: string }) {
    const host = Config.default.hosts.crypto_component[env];
    const response = await axios.get(
        `${host}/order/status/${query.order_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}