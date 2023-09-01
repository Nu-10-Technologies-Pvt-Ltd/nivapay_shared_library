import axios, { AxiosResponse } from 'axios';
import * as Config from '../../../config';


export async function getBySymbol (env: string, api_key: string, query: {symbol: string}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/nivapay/fiat/currencies/by-symbol/${query.symbol}`,
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
        `${host}/nivapay/fiat/currencies/${query.id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}

export async function getByNameSymbol (env: string, api_key: string, query: {name: string, symbol: string}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/nivapay/fiat/currencies/${query.name}/${query.symbol}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}