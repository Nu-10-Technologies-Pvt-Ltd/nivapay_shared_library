import axios from 'axios';
import * as Config from '../../../config';

export async function onRampOrderAccounting(env: string, api_key: string, query: {
    order_id: string,
    transactionId: string,
    transak_order_id: string
}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk/accounting/on-ramp`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}
export async function onRampTSwapOrderAccounting(env: string, api_key: string, query: {
    order_id: string,
    transactionId: string,
    transak_order_id: string
}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk/accounting/on-ramp-t-swap`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function userDepositOrderAccounting(env: string, api_key: string, query: {
    orderDetails: any,
    merchantDetails: any,
    orderVirtualCurrencyDetails: any,
    netAmountVirtual: any,
}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk/accounting/user-deposit`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
};

export async function handleUpdateAccountBalance(env: string, api_key: string, query: { account_id: string, order_id: string, transaction_id: string, currency_id: string, incoming_amount: string, outgoing_amount: string }) {
    try {
        const host = Config.default.hosts.core_service[env];
        const response = await axios.post(
            `${host}/core/update-account-balance`,
            query,
            {
                headers: {
                    'x-api-key': api_key,
                },
            }
        )
        return response.data
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function CreateTreasurySwapOrderAccounting(env: string, api_key: string, query: {
    order_id: string,
    onChaintransactionId?: string,
    offChaintransactionId?: string,
    eq_pzp_amount?: string,
    gas_fee_required: string
}) {
    try {
        const host = Config.default.hosts.core_service[env];
        const response = await axios.post(
            `${host}/sdk/accounting/treasury_swap`,
            query,
            {
                headers: {
                    'x-api-key': api_key,
                },
            }
        )
        return response.data
    } catch (error) {
        throw new Error(error.message);
    }
}