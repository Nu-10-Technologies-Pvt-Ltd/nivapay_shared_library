import axios from 'axios';
import * as Config from '../../../config';
import { InvokeSmartContractDto } from '../../../dtos/dtos/third_party';

export async function estimateGasPriceByChain(
    env: string,
    api_key: string,
    query: { testnet: boolean }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/provider/tatum/ethereum/estimate/gas-price/?test=${query.testnet}`,
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
        `${host}/provider/tatum/ethereum/transaction/byhash/${query.testnet}/${query.hash}`,
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
    query: { hash: string, currencyId: string }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/provider/tatum/ethereum/transaction/by/hash/${query.hash}/${query.currencyId}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function getTransactionDetailsByHash_ScId(
    env: string,
    api_key: string,
    query: { hash: string, sc_id: string }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/provider/tatum/ethereum/transaction/by/hash/${query.hash}/sc_id/${query.sc_id}`,
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
        `${host}/provider/tatum/ethereum/transaction/byaddress/${query.testnet}/${query.wallet_address}`,
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
        `${host}/provider/tatum/ethereum/transaction/by/address/${query.wallet_address}/${query.currencyId}/${query.direction}`,
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
        `${host}/provider/tatum/ethereum/estimate/fee`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function estimateGasFee(
    env: string,
    api_key: string,
    query: {
        fromAddress: string
        toAddress: string
        amount: string
        currencyId: string
    }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/provider/tatum/ethereum/estimate/gas/fee`,
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
    query: {
        fromAddress: string
        toAddress: string
        amount: string
        currencyId: string
    }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/provider/tatum/ethereum/transfer`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function invokeSmartContract(
    env: string,
    api_key: string,
    query: InvokeSmartContractDto
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/provider/tatum/ethereum/invoke/smart_contract`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}