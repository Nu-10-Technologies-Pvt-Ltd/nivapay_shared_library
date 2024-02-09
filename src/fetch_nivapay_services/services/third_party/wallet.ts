import axios from 'axios';
import * as Config from '../../../config';

export enum WalletAddressType {
    EOA = 'EOA',
    Contract = 'contract'
}

export enum WalletDirectionToWatch {
    INCOMING = 'INCOMING',
    OUTGOING = 'OUTGOING',
    BIDIRECTIONAL = 'BI-DIRECTIONAL'
}

export enum WalletUsageFrequency {
    ONE = 'ONE',
    MANY = 'MANY'
}

export async function createWallet(
    env: string,
    api_key: string,
    query: {
        currency_id: string,
        account_id: string,
        address_type?: WalletAddressType, //optional
        contract_owner_address?: string, //optional
        walletName?: string, //optional
        direction_to_watch: WalletDirectionToWatch,
        usage_frequency: WalletUsageFrequency,
        expiry_at: string
    }
) {

    const host = Config.default.hosts.third_party_service[env];
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

export async function createWalletEntryInDB(
    env: string,
    api_key: string,
    query: {
        address: string,
        currencyId: string,
        walletName: string,
        accountId: string,
        addressType: string,
        contractOwnerAddress: string,
        directionToWatch: string,
        usageFrequency: string,
        expiryAt: any
    }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/kms/address/createWalletEntry`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )

    return response.data ? response.data : null
}

export async function getWalletDetailsById(
    env: string,
    api_key: string,
    query: {
        wallet_id: string,
    }
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/kms/address/wallet/details/${query.wallet_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function getWalletDetailsByAddress(
    env: string,
    api_key: string,
    query: {
        wallet_address: string,
    }
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/kms/address/wallet_address/details/${query.wallet_address}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}


export async function updateWalletExpiry(
    env: string,
    api_key: string,
    query: {
        wallet_id: string,
        expiry_time: string
    }
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.patch(
        `${host}/kms/address/wallet/expiry`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}