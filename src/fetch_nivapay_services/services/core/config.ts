import axios from 'axios';
import * as Config from '../../../config';
import { checkConfigDto } from '../../../dtos';

export async function check_config (env: string, api_key: string, query: { payload: checkConfigDto }) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/core/check/config`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}