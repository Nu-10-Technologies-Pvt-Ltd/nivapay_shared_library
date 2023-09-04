import axios from 'axios';
import * as Config from '../../../config';

export async function createRampWallet (
        env: string, 
        api_key: string, 
        query: {currency: string, network: string, userId: string, merchantId: string, testnet: boolean, is_merchant: boolean}
    ) {

    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/kms/address/createRampWallet`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )

    return response.data ? response.data : null
}

export async function getKmsWalletRepoByUser(
    env: string, 
    api_key: string, 
    query: {merchant_id: string, userId: string, crypto: string, network: string}
) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/kms/address/getKmsWalletRepoByUser`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )

    return response.data
}

export async function createWallet (
    env: string, 
    api_key: string, 
    query: {currency: string, network: string, userId: string, merchantId: string, testnet: boolean, is_merchant: boolean}
) {

const host = Config.default.hosts.core_service[env];
const response = await axios.post(
    `${host}/kms/address/createWallet`,
    query,
    {
        headers: {
            'x-api-key': api_key,
        },
    }
)

return response.data ? response.data : null
}