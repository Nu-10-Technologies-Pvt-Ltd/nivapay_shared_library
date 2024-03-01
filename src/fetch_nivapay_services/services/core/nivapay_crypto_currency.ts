import axios from 'axios';
import * as Config from '../../../config';

export async function getById (env: string, api_key: string, query: {id: string}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/crypto/currencies/${query.id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function getByNetworkSymbolTestnet (env: string, api_key: string, query: {network: string, symbol: string, isTestnet: boolean}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/crypto/currencies/by-network-crypto-testnet/${query.symbol}/${query.network}/${query.isTestnet}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function getByNetworkSymbol (env: string, api_key: string, query: {network: string, symbol: string}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/crypto/currencies/by-network-crypto/${query.symbol}/${query.network}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function getByNetworkArray(env:string, api_key: string, query:{network: string[]}){
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/nivapay/crypto/currencies/get/by-network-array`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function getNativeByNetwork(env:string, api_key: string, query:{network: string}){
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/crypto/currencies/get/native/${query.network}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function getAllByNetworkId(env:string, api_key: string, query:{network_id: string}){
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/crypto/currencies/get/by-network-id/${query.network_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}