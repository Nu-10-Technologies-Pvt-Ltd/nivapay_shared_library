/* eslint-disable prettier/prettier */
import axios from 'axios';
import * as Config from '../../../config'

export async function getInterComApiKey(env: string) {
    try {
        if(env === 'local'){
            const host = Config.default.hosts.core_service[env];
            const response = await axios.get(
                `${host}/aws/intercomm/apikey`
            )
            return response.data
        }
        else{
            const host = Config.default.hosts.lambda_functions.get_intercomm_api_key[env];
            const response = await axios.get(host)
            return response?.data?.NIVAPAY_INTERCOMM_API_KEY ?? ""
        }
    } catch (error) {
        console.log("error")
        return {
            status: false,
            message: error.message
        }
    }
}

export async function getTatumApiKey(env: string, api_key: string) {
    try {

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
    } catch (error) {
        console.log("error")
        return {
            status: false,
            message: error.message
        }
    }
}

export async function getNivapayAuthCredentials(env: string, api_key: string) {
    try {

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
    } catch (error) {
        console.log("error")
        return {
            status: false,
            message: error.message
        }
    }
}

export async function getAesPwd(env: string, api_key: string) {
    try {

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
    } catch (error) {
        console.log("error")
        return {
            status: false,
            message: error.message
        }
    }
}

export async function getMerchantApiKey(env: string, api_key: string, query: {merchant_id: string}) {
    try {
        const host = Config.default.hosts.core_service[env];
        const response = await axios.get(
            `${host}/aws/merchant/apikey/${query.merchant_id}`,
            {
                headers: {
                    'x-api-key': api_key,
                },
            }
        )
        return response.data
    } catch (error) {
        console.log("error")
        return {
            status: false,
            message: error.message
        }
    }
}

export async function getMerchantWebhookSecret(env: string, api_key: string, query: {merchant_id: string}) {
    try {
        const host = Config.default.hosts.core_service[env];
        const response = await axios.get(
            `${host}/aws/merchant/webhook_secret/${query.merchant_id}`,
            {
                headers: {
                    'x-api-key': api_key,
                },
            }
        )
        return response.data
    } catch (error) {
        console.log("error")
        return {
            status: false,
            message: error.message
        }
    }
}

export async function getIsMerchantWebhookSecretAvailable(env: string, api_key: string, query: { merchant_id: string }) {
    try {

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
    } catch (error) {
        console.log("error")
        return {
            status: false,
            message: error.message
        }
    }
}