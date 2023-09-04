import axios from 'axios';
import * as Config from '../../../config';

export async function getIdByName (env: string, api_key: string, query: {productName: string}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/products/id-by-name/${query.productName}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function getByName (env: string, api_key: string, query: {productName: string}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/products/by-name/${query.productName}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}