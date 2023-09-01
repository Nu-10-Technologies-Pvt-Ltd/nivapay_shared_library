import axios, { AxiosResponse } from 'axios';
import * as Config from '../../../config';


export async function get (env: string, api_key: string, query: {merchant_id: string, product_id: string, currency_id: string}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/nivapay/service_fee/config/${query.merchant_id}/${query.product_id}/${query.currency_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}