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

export async function handleUpdateAccountBalance(env: string, api_key: string, query: { account_id: string, order_id: string, transaction_id: string, currency_id: string, incoming_amount: string, outgoing_amount: number }) {
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