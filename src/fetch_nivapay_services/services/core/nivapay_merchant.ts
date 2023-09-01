import axios, { AxiosResponse } from 'axios';
import * as Config from '../../../config';


export async function getById (env: string, api_key: string, query: {id: string}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.get(
        `${host}/nivapay/merchant/${query.id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}