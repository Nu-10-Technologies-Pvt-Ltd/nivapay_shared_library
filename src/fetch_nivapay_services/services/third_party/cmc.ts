
import axios from 'axios';
import * as Config from '../../../config';

export async function rateConversion(
    env: string,
    api_key: string,
    query: { amount: number, symbol: string, convertSymbol }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/cmc/convert?amount=${query.amount}&symbol=${query.symbol}&convertSymbol=${query.convertSymbol}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}