import axios from 'axios';
import * as Config from '../../../config';

export async function GetTransactionDetailsByHash(
    env: string,
    api_key: string,
    network:string,
    transaction_hash:string,
    testnet:boolean
) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/provider/tatum/nft-checkout/transactiondetails/hash?network=${network}&transaction_hash=${transaction_hash}&testnet=${testnet}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function InvokeSmartContract(
    env: string,
    api_key: string,
    body,
    network: string,
    testnet: string

) {

    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.get(
        `${host}/provider/tatum/nft-checkout/invokecontract?testnet=${testnet}&network=${network}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}


// provider/tatum/usdt-eth