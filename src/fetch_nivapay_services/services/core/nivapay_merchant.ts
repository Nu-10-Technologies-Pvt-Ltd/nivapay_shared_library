import axios from 'axios';
import * as Config from '../../../config';


export async function getById (env: string, api_key: string, query: {id: string}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/merchant/${query.id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}