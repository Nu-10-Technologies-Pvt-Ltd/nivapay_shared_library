import axios from 'axios';
import * as Config from '../../../config';


export async function getBySymbol (env: string, api_key: string, query: {symbol: string}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/fiat/currencies/by-symbol/${query.symbol}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function getById (env: string, api_key: string, query: {id: string}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/fiat/currencies/${query.id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function getByNameSymbol (env: string, api_key: string, query: {name: string, symbol: string}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/fiat/currencies/${query.symbol}/${query.name}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}