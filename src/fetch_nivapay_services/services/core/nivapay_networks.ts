import axios from 'axios';
import * as Config from '../../../config';

export async function getAll (env: string, api_key: string) {
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