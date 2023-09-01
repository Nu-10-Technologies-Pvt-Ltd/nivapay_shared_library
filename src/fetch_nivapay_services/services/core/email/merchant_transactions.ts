import axios, { AxiosResponse } from 'axios';
import * as Config from '../../../../config';
import { SdkWithdrawalOrderDetailsDto } from '../../../../dtos/dtos/sdk-withdrawal-order-details.dto';

export async function deposit_success (env: string, api_key: string, query: { payload: SdkWithdrawalOrderDetailsDto, txUrl: string }): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.post(
        `${host}/merchant/transactions/email/deposit-success`,
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

export async function withdrawal_processing (env: string, api_key: string, query: { payload: SdkWithdrawalOrderDetailsDto, eta: string, wallet_name: string }): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.post(
        `${host}/merchant/transactions/email/withdrawal-processing`,
        {
            payload: query.payload,
            eta: query.eta,
            wallet_name: query.wallet_name
        },
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}

export async function withdrawal_success (env: string, api_key: string, query: { payload: SdkWithdrawalOrderDetailsDto, txUrl: string, wallet_name: string }): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.post(
        `${host}/merchant/transactions/email/withdrawal-success`,
        {
            payload: query.payload,
            txUrl: query.txUrl,
            wallet_name: query.wallet_name
        },
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}