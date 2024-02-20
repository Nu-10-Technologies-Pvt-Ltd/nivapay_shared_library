import axios from 'axios';
import * as Config from '../../../config';
import { TatumEstimateGasFeeDto, TatumTransferDto } from '../../../dtos/dtos/third_party';
import { TatumBalanceDto } from '../../../dtos/dtos/third_party/tatum/balance.dto';

export async function getGasEstimate(
    env: string,
    api_key: string,
    query: TatumEstimateGasFeeDto
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/tatum/estimate/fee`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function transfer(
    env: string,
    api_key: string,
    query: TatumTransferDto
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/tatum/transfer`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function getBalance(
    env: string,
    api_key: string,
    query: TatumBalanceDto
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/tatum/balance`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}