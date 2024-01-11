import axios from 'axios';
import * as Config from '../../../config';

export async function getFiatCurrencyDetails(
    env: string,
    api_key: string
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/transak/get/fiat/currencies`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}