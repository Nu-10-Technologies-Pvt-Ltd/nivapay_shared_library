import axios from 'axios';
import * as Config from '../../../../config';

export async function password (env: string, api_key: string, query: { payload: any}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/nivapay-merchant-email/send-password`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}