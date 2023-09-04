import axios from 'axios';
import * as Config from '../../../config';


export async function getByMerchantId (env: string, api_key: string, query: {merchant_id: string}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/merchant/product/config/${query.merchant_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function getByMerchantIdProductId (env: string, api_key: string, query: {merchant_id: string, product_id: string}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/merchant/product/config/${query.merchant_id}/${query.product_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function getIsMerchantEnabledForProduct (env: string, api_key: string, query: {merchant_id: string, product_id: string}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/merchant/product/config/isEnabled/${query.merchant_id}/${query.product_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}