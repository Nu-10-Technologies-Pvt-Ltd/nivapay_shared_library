import axios from 'axios';
import * as Config from '../../../config';

export async function getTransactionDetailsByHash(
    env: string,
    api_key: string,
    query: { transaction_hash: string, testnet: boolean, network: string }
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}provider/tatum/nft-checkout/transactiondetails/hash?testnet=${query.testnet}&transaction_hash=${query.transaction_hash}&network=${query.network}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}