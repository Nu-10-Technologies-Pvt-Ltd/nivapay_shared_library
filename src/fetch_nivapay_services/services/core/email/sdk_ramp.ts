import axios from 'axios';
import * as Config from '../../../../config';
import { SdkRampOrderUpdateDto } from '../../../../dtos/dtos/sdk-ramp-order-update.dto';

export async function error(env: string, api_key: string, query: { payload: SdkRampOrderUpdateDto }) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk-ramp-mail/send-error-email`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function failure(env: string, api_key: string, query: { payload: SdkRampOrderUpdateDto }) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk-ramp-mail/failure`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function session_time_out(env: string, api_key: string, query: { payload: SdkRampOrderUpdateDto }) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk-ramp-mail/session-timed-out`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function success(env: string, api_key: string, query: { payload: SdkRampOrderUpdateDto }) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk-ramp-mail/success`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function processing(env: string, api_key: string, query: { payload: SdkRampOrderUpdateDto }) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk-ramp-mail/processing`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function transferring(env: string, api_key: string, query: { payload: SdkRampOrderUpdateDto, eta: string }) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk-ramp-mail/transferring`,
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
    return response.data
}