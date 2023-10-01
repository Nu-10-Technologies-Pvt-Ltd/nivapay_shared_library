import axios from 'axios';
import * as Config from '../../../config';

export async function transferFromHouseWallet(
    env: string,
    api_key: string,
    query: {currency_id: string, account_id: string, to_address: string, amount: string}
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/nivapay-housewallet/transfer`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}