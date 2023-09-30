import axios, { AxiosResponse } from 'axios';
import * as Config from '../../../../config';
import { updateDepositOrderDto } from 'src/dtos';


export async function success(env: string, api_key: string, query: {
    payload: updateDepositOrderDto,
    transaction_amount: number, wallet_address: string, symbol: string, txId: string, explore_url: string
}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk-payin-mail/success`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function session_time_out(env: string, api_key: string, query: { payload: updateDepositOrderDto }) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk-payin-mail/session-timed-out`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}


export async function detecting(env: string, api_key: string, query: { payload: updateDepositOrderDto, expected_amount: string, expected_symbol: string, eta: string, wallet_address: string }) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk-payin-mail/detecting`,
        {
            payload: query.payload,
            eta: query.eta,
            wallet_address: query.wallet_address,
            expected_amount: query.expected_amount,
            expected_symbol: query.expected_symbol,
        },
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function failure(env: string, api_key: string, query: { payload: updateDepositOrderDto, wallet_address: string, asset_symbol: string, asset_amount: string }) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk-payin-mail/failure`,
        {
            payload: query.payload,
            wallet_address: query.wallet_address,
            asset_symbol: query.asset_symbol, asset_amount: query.asset_amount
        },
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}