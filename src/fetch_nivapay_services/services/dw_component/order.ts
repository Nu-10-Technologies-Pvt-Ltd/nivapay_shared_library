import axios from 'axios';
import * as Config from '../../../config';


export async function createOffChainDepositOrder(env: string, api_key: string, query: {
    from_account_id: string,
    to_account_id: string,
    transaction_currency_id: string,
    transaction_amount: string,
    merchant_id: string,
}) {
    const host = Config.default.hosts.dw_component[env];
    const response = await axios.post(
        `${host}/order/create/deposit/off_chain`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function createOnChainDepositOrder(env: string, api_key: string, query: {
    from_wallet_id: string,
    to_wallet_id: string,
    transaction_currency_id: string,
    transaction_amount: string,
    merchant_id: string,
}) {
    const host = Config.default.hosts.dw_component[env];
    const response = await axios.post(
        `${host}/order/create/deposit/on_chain`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function createWithdrawalOrder(env: string, api_key: string, query: {
    from_wallet_id: string,
    to_wallet_address: string,
    transaction_currency_id: string,
    transaction_amount: string,
    merchant_id: string,
    gas_estimate?: {
        gas_price?: string,
        gas_limit?: string
    }
}) {
    const host = Config.default.hosts.dw_component[env];
    const response = await axios.post(
        `${host}/order/create/withdraw`,
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
    const host = Config.default.hosts.dw_component[env];
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
    const host = Config.default.hosts.dw_component[env];
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

export async function updateOrderStatusOnDemand(env: string, api_key: string, query: { order_id: string, status: string }) {
    const host = Config.default.hosts.dw_component[env];
    const response = await axios.patch(
        `${host}/order/status/${query.order_id}/${query.status}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function priorWithdrawalOrderCheck(env: string, api_key: string, query: { merchant_id: string }) {
    const host = Config.default.hosts.dw_component[env];
    const response = await axios.get(
        `${host}/order/check/prior/withdraw/${query.merchant_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}