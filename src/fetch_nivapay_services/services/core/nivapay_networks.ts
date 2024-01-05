import axios from 'axios';
import * as Config from '../../../config';

export async function getAll(env: string, api_key: string) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nvp-networks`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data.data
}

export async function getOneById(env: string, api_key: string, query: {
    nivapay_network_id: string;
}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nvp-networks/get_by_id/${query.nivapay_network_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

