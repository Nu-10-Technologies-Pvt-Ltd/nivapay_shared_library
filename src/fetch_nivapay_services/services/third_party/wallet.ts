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


// export async function getKmsWalletRepoByUser(
//     env: string,
//     api_key: string,
//     query: { merchant_id: string, userId: string, crypto: string, network: string }
// ) {
//     const host = Config.default.hosts.third_party_service[env];
//     const response = await axios.post(
//         `${host}/kms/address/getKmsWalletRepoByUser`,
//         query,
//         {
//             headers: {
//                 'x-api-key': api_key,
//             },
//         }
//     )

//     return response.data
// }

export async function createWallet(
    env: string,
    api_key: string,
    query: {
        currency_id: string,
        account_id: string,
        address_type: WalletAddressType, //optional
        contract_owner_address: string, //optional
        walletName: string, //optional
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

export async function createDepositWallet(
    env: string,
    api_key: string,
    query: { symbol: string, network: string, merchant_id: string, testnet: boolean, is_merchant: boolean, order_id: string, currency_id: string }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/kms/address/create/deposit/wallet`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )

    return response.data ? response.data : null
}