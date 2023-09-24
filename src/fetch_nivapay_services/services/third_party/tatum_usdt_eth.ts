import axios from 'axios';
import * as Config from '../../../config';

export async function getTransactionDetailsByHash(
    env: string,
    api_key: string,
    query: { hash: string, testnet: boolean }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/provider/tatum/usdt-eth/transaction/byhash/${query.testnet}/${query.hash}`,
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
    query: { wallet_address: string, testnet: boolean, contract_address: string }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/provider/tatum/usdt-eth/transaction/byaddress/${query.testnet}/${query.wallet_address}/${query.contract_address}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}


export async function getEstimatedFee(
    env: string,
    api_key: string,
    query: {
        fromAddress: string
        toAddress: string
        amount: string
        testnet: boolean
    }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/provider/tatum/usdt-eth/estimate/fee`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

// provider/tatum/usdt-eth