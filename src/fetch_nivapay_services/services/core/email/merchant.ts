import axios, { AxiosResponse } from 'axios';
import * as Config from '../../../../config';

export async function password (env: string, api_key: string, query: { payload: any}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.post(
        `${host}/nivapay-merchant-email/send-password`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}