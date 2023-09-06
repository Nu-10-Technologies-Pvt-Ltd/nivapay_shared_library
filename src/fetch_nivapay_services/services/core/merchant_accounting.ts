import axios from 'axios';
import * as Config from '../../../config';

export async function MerchantBalanceUpdate (env: string, api_key: string, query: {merchant_id: string, product_id: string, currency_id: string, incoming_amount: string, merchant_txn_id: string, order_id: string}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/merchant-accounting/update-balance`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}