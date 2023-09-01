import axios, { AxiosResponse } from 'axios';
import * as Config from '../../../config';


export async function getByMerchantId (env: string, api_key: string, query: {merchant_id: string}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/nivapay/merchant/product/virtual_currency/config/${query.merchant_id}`,
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
        `${host}/nivapay/merchant/product/virtual_currency/config/${query.merchant_id}/${query.product_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}

export async function isEnabled (env: string, api_key: string, query: {merchant_id: string, product_id: string, currency_id: string}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/nivapay/merchant/product/virtual_currency/config/isenabled/${query.merchant_id}/${query.product_id}/${query.currency_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}