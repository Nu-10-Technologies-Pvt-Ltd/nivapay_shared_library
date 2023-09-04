import axios from 'axios';
import * as Config from '../../../config';


export async function get (env: string, api_key: string, query: {merchant_id: string, product_id: string, currency_id: string}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/network_fee/config/${query.merchant_id}/${query.product_id}/${query.currency_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}