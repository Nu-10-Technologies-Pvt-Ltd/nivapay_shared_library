/* eslint-disable prettier/prettier */
import axios from 'axios';
import * as Config from '../../../config';

export async function createOrder(
    env: string,
    api_key: string,
    query: any,
) {
    const host = Config.default.hosts.onramp_service[env];
    const response = await axios.post(
        `${host}/merchant/sdk/onramp-order`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        },
    );
    return response.data ? response.data : null;
}

export async function getOrderDetails(
    env: string,
    api_key: string,
    query: { order_id: string },
) {
    const host = Config.default.hosts.onramp_service[env];
    const response = await axios.get(
        `${host}/sdk/onramp/order/details/${query.order_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        },
    );
    return response.data ? response.data : null;
}
export async function getOrderStatus(
    env: string,
    api_key: string,
    query: { order_id: string },
) {
    const host = Config.default.hosts.onramp_service[env];
    const response = await axios.get(
        `${host}/sdk/onramp/order/status/${query.order_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        },
    );
    return response.data ? response.data : null;
}
export async function getTransactionDetails(
    env: string,
    api_key: string,
    query: { order_id: string },
) {
    const host = Config.default.hosts.onramp_service[env];
    const response = await axios.get(
        `${host}/sdk/onramp/transaction/details/${query.order_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        },
    );
    return response.data ? response.data : null;
}
export async function updateTransactionStatus(
    env: string,
    api_key: string,
    query: { order_id: string; order_status: string },
) {
    const host = Config.default.hosts.onramp_service[env];
    const response = await axios.put(`${host}/sdk/onramp/update/status`, query, {
        headers: {
            'x-api-key': api_key,
        },
    });
    return response.data ? response.data : null;
}
export async function orderEvent(
    env: string,
    api_key: string,
    query: { user_event: string; provider: string; data: any; timestamp: string },
) {
    const host = Config.default.hosts.onramp_service[env];
    const response = await axios.put(`${host}/sdk/onramp/order/events`, query, {
        headers: {
            'x-api-key': api_key,
        },
    });
    return response.data ? response.data : null;
}
