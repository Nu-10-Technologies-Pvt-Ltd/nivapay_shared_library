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

export async function getOrCreateSelfTxnDepositWallet (env: string, api_key: string, query: {
    merchant_id: string,
    currency_id: string,
    merchant_nick_name?: string
}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/merchant/self-txn/address/getorcreate/deposit`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}
