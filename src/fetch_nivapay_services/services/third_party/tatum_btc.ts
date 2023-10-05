import axios from 'axios';
import * as Config from '../../../config';

export async function getTransactionDetailsByHash(
    env: string,
    api_key: string,
    query: { hash: string, testnet: boolean }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/provider/tatum/bitcoin/transaction/byhash/${query.testnet}/${query.hash}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}
export async function getTransactionDetailsByHash_v2(
    env: string,
    api_key: string,
    query: { hash: string, currencyId: boolean }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/provider/tatum/bitcoin/transaction/by/hash/${query.hash}/${query.currencyId}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function getTransactionByAddress(
    env: string,
    api_key: string,
    query: { wallet_address: string, testnet: boolean }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/provider/tatum/bitcoin/transaction/byaddress/${query.testnet}/${query.wallet_address}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function getTransactionByAddress_v2(
    env: string,
    api_key: string,
    query: { wallet_address: string, currencyId: string, direction: string }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/provider/tatum/bitcoin/transaction/by/address/${query.wallet_address}/${query.currencyId}/${query.direction}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}