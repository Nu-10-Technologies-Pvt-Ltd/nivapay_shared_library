import axios, { AxiosResponse } from 'axios';
import * as Config from '../../../config'

export async function getInterComApiKey (env: string): Promise<AxiosResponse<string>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/aws/intercomm/apikey`
    )
}

export async function getTatumApiKey (env: string, api_key: string): Promise<AxiosResponse<string>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/aws/tatum-key`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}

export async function getNivapayAuthCredentials (env: string, api_key: string): Promise<AxiosResponse<string>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/aws/nivapay-auth`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}

export async function getAesPwd (env: string, api_key: string): Promise<AxiosResponse<string>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/aws/aes-password`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}

export async function getIsMerchantWebhookSecretAvailable (env: string, api_key: string): Promise<AxiosResponse<string>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/aws/merchant-webhook-exist`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}