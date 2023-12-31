import axios from 'axios';
import * as Config from '../../../config';

export async function update_balance (env: string, api_key: string, query: { payload: any }) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/core/update-balance`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function update_account_balance (env: string, api_key: string, query: {
    account_id: string;
    order_id: string;
    transaction_id: string;
    currency_id: string;
    incoming_amount: string;
    outgoing_amount: string;
}) {
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
}