import axios from 'axios';
import * as Config from '../../../config'

export async function getInterComApiKey (env: string) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/aws/intercomm/apikey`
    )
    return response.data
}

export async function getTatumApiKey (env: string, api_key: string) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/aws/tatum-key`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function getNivapayAuthCredentials (env: string, api_key: string) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/aws/nivapay-auth`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function getAesPwd (env: string, api_key: string) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/aws/aes-password`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function getIsMerchantWebhookSecretAvailable (env: string, api_key: string, query:{merchant_id: string}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/aws/merchant-webhook-exist`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}