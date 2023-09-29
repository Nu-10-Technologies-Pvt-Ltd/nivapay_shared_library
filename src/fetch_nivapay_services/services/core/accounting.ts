import axios from 'axios';
import * as Config from '../../../config';

export async function onRampOrderAccounting(env: string, api_key: string, query: {
    order_id: string,
    transactionId: string,
    transak_order_id: string
}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}//sdk/accounting/on-ramp`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}