import axios, { AxiosResponse } from 'axios';
import * as Config from '../../../config';

export async function update_balance (env: string, api_key: string, query: { payload: any }): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.post(
        `${host}/core/update-balance`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}