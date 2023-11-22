/* eslint-disable prettier/prettier */
import axios, { AxiosResponse } from 'axios';
import * as Config from '../../../../config';
import { updateDepositOrderDto } from 'src/dtos';

export async function emailsAndWebhook(
    env: string,
    api_key: string,
    query: {
        payload: updateDepositOrderDto;
        transaction_amount: number;
        wallet_address: string;
        symbol: string;
        txId: string;
        explore_url: string;
    },
) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(`${host}/sdk-payin-mail/success`, query, {
        headers: {
            'x-api-key': api_key,
        },
    });
    return response.data;
}
