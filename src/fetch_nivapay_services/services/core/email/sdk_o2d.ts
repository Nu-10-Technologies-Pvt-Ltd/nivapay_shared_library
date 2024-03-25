/* eslint-disable prettier/prettier */
import axios from 'axios';
import * as Config from '../../../../config';

export async function onramp_processing(env: string, api_key: string, query: {
    payload: {
        id: string;
        order_user_email_id: string;
        order_fiat_amount: string;
        convert_to_crypto_symbol: string
        merchant_name: string;
        user_first_name: string;
        transak_txn_crypto_amount: number;
        order_fiat_symbol: string;
        merchant_id: string;
        merchant_user_id: string;
    }
}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk-o2d-mail/onramp_processing`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function onramp_success(env: string, api_key: string, query: {
    payload: {
        id: string;
        order_user_email_id: string;
        order_fiat_amount: string;
        convert_to_crypto_symbol: string
        merchant_name: string;
        user_first_name: string;
        transak_txn_crypto_amount: number;
        order_fiat_symbol: string;
        merchant_id: string;
        merchant_user_id: string;
    }
}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk-o2d-mail/onramp_success`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function failure(env: string, api_key: string, query: {
    payload: {
        id: string;
        order_user_email_id: string;
        order_fiat_amount: string;
        convert_to_crypto_symbol: string;
        merchant_name: string;
        user_first_name: string;
        transak_txn_crypto_amount: number;
        order_fiat_symbol: string;
        merchant_id: string;
        merchant_user_id: string;
        to_fixed_still: number
    }
}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk-o2d-mail/onramp_failure`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function session_time_out(env: string, api_key: string, query: {
    payload: {
        order_user_email_id: string, id: string, order_fiat_amount: string,
        merchant_name: string, user_first_name: string, order_fiat_symbol: string,
        merchant_id: string, merchant_user_id: string
    }
}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.post(
        `${host}/sdk-o2d-mail/session-timed-out`,
        query.payload,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}


export async function transfer_failed(env: string, api_key: string, query: {
    payload: {
        id: string;
        order_user_email_id: string;
        order_fiat_amount: string;
        convert_to_crypto_symbol: string
        merchant_name: string;
        user_first_name: string;
        transak_txn_crypto_amount: number;
        order_fiat_symbol: string;
        merchant_id: string;
        merchant_user_id: string;
    }
}) {
    try {

        const host = Config.default.hosts.core_service[env];
        const response = await axios.post(
            `${host}/sdk-o2d-mail/transfer_failed`,
            query.payload,
            {
                headers: {
                    'x-api-key': api_key,
                },
            }
        )
        return response.data
    } catch (error) {
        console.log("error")
        return {
            status: false,
            message: error.message
        }
    }
}

export async function transferring(env: string, api_key: string, query: {
    payload: {
        id: string;
        order_user_email_id: string;
        order_fiat_amount: string;
        convert_to_crypto_symbol: string
        merchant_name: string;
        user_first_name: string;
        transak_txn_crypto_amount: number;
        order_fiat_symbol: string;
        merchant_id: string;
        merchant_user_id: string;
        to_fixed_still: number;
        deposit_id: string
    },
    eta: number
}) {
    try {

        const host = Config.default.hosts.core_service[env];
        const response = await axios.post(
            `${host}/sdk-o2d-mail/transferring`,
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
    } catch (error) {
        console.log("error")
        return {
            status: false,
            message: error.message
        }
    }
}

export async function transfer_success(env: string, api_key: string, query: {
    payload: {
        id: string;
        order_user_email_id: string;
        order_fiat_amount: string;
        convert_to_crypto_symbol: string
        merchant_name: string;
        user_first_name: string;
        transak_txn_crypto_amount: number;
        order_fiat_symbol: string;
        merchant_id: string;
        merchant_user_id: string;
        to_fixed_still: number;
        deposit_id: string
    }
}) {
    try {

        const host = Config.default.hosts.core_service[env];
        const response = await axios.post(
            `${host}/sdk-o2d-mail/success`,
            query.payload,
            {
                headers: {
                    'x-api-key': api_key,
                },
            }
        )
        return response.data
    } catch (error) {
        console.log("error")
        return {
            status: false,
            message: error.message
        }
    }
}


