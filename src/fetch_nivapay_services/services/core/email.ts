import axios, { AxiosResponse } from 'axios';
import * as Config from '../../../config';
import { SdkWithdrawalOrderDetailsDto } from '../../../dtos/dtos/sdk-withdrawal-order-details.dto';

export async function email(){
    function merchant_transactions(){
        async function deposit_success (env: string, api_key: string, query: { payload: SdkWithdrawalOrderDetailsDto, txUrl: string }): Promise<AxiosResponse<any>> {
            const host = Config.default.hosts.core_service[env];
            return await axios.post(
                `${host}/merchant/transactions/email`,
                {
                    payload: query.payload,
                    txUrl: query.txUrl
                },
                {
                    headers: {
                        'x-api-key': api_key,
                    },
                }
            )
        }
    }
}