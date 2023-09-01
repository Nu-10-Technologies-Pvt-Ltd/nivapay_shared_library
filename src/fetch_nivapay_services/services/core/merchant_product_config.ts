import axios, { AxiosResponse } from 'axios';
import * as Config from '../../../config';


export async function getByMerchantId (env: string, api_key: string, query: {merchant_id: string}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/nivapay/merchant/product/config/${query.merchant_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}

export async function getByMerchantIdProductId (env: string, api_key: string, query: {merchant_id: string, product_id: string}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/nivapay/merchant/product/config/${query.merchant_id}/${query.product_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}

export async function getIsMerchantEnabledForProduct (env: string, api_key: string, query: {merchant_id: string, product_id: string}):Promise<AxiosResponse<boolean>>{
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/nivapay/merchant/product/config/isEnabled/${query.merchant_id}/${query.product_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}