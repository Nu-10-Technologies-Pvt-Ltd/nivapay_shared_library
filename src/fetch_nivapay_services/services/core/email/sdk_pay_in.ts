import axios, { AxiosResponse } from 'axios';
import * as Config from '../../../../config';
import { SdkWithdrawalOrderDetailsDto } from '../../../../dtos/dtos/sdk-withdrawal-order-details.dto';

export async function error (env: string, api_key: string, query: { payload: SdkWithdrawalOrderDetailsDto, eta: string}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.post(
        `${host}/sdk-payin-mail/send-error-email`,
        {
            payload: query.payload,
            eta: query.eta
        },
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}

export async function session_time_out (env: string, api_key: string, query: { payload: SdkWithdrawalOrderDetailsDto}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.post(
        `${host}/sdk-payin-mail/session-timed-out`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}

export async function success (env: string, api_key: string, query: { payload: SdkWithdrawalOrderDetailsDto}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.post(
        `${host}/sdk-payin-mail/success`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}

export async function processing (env: string, api_key: string, query: { payload: SdkWithdrawalOrderDetailsDto, eta: string}): Promise<AxiosResponse<any>> {
    const host = Config.default.hosts.core_service[env];
    return await axios.post(
        `${host}/sdk-payin-mail/processing`,
        {
            payload: query.payload,
            eta: query.eta
        },
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
}