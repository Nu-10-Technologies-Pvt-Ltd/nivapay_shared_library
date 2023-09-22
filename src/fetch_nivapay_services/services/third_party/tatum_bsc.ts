import axios from 'axios';
import * as Config from '../../../config';

enum TransactionDirection {
    Incoming = "incoming",
    Outgoing = "outgoing",
}

export async function getGasEstimate(
    env: string,
    api_key: string,
    query: {fromAddress: string, toAddress: string, amount: string, testnet: string, currency: string, contractAddress?: string}
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/provider/tatum/bsc/estimate/fee`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}


export async function transfer(
    env: string,
    api_key: string,
    query: {fromAddress: string, toAddress: string, amount: string, testnet: string, currency: string, contractAddress?: string, contractDecimals?:string}
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/provider/tatum/bsc/transfer`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function getBalance(
    env: string,
    api_key: string,
    query: { address: string, testnet: boolean, currency: string, contractAddress?: string }
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/provider/tatum/bsc/balance`,
        query,
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
    query: { wallet_address: string, testnet: boolean, direction: TransactionDirection }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/provider/tatum/bsc/transaction/byaddress/${query.testnet}/${query.wallet_address}/${query.direction}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function getTransactionDetailsByHash(
    env: string,
    api_key: string,
    query: { hash: string, testnet: boolean }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/provider/tatum/bsc/transaction/byhash/${query.testnet}/${query.hash}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}



