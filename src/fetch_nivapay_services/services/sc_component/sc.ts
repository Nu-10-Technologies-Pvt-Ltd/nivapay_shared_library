import axios from 'axios';
import * as Config from '../../../config';

export async function initiateOrder(env: string, api_key: string, query: { order_id: string }) {
    const host = Config.default.hosts.sc_component[env];
    const response = await axios.get(
        `${host}/smart_contract/initiate/order/${query.order_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}

export async function getTransactionDetails(env: string, api_key: string, query: { order_id: string }) {
    const host = Config.default.hosts.sc_component[env];
    const response = await axios.get(
        `${host}/accounting/transaction/details/${query.order_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data;
}