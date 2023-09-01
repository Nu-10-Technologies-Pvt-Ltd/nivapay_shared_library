import axios, { AxiosResponse } from 'axios';
import * as Config from '../../../config';


export async function getBySymbol (env: string, api_key: string, query: {symbol: string}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/nivapay/crypto/currencies/by-crypto/${query.symbol}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}

export async function getById (env: string, api_key: string, query: {id: string}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/nivapay/crypto/currencies/${query.id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}

export async function getByNetworkSymbolTestnet (env: string, api_key: string, query: {network: string, symbol: string, isTestnet: boolean}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/nivapay/crypto/currencies/by-network-crypto-testnet/${query.symbol}/${query.network}/${query.isTestnet}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}

export async function getByNetworkSymbol (env: string, api_key: string, query: {network: string, symbol: string}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/nivapay/crypto/currencies/by-network-crypto/${query.symbol}/${query.network}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}