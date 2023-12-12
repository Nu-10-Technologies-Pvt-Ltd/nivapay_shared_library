/* eslint-disable prettier/prettier */
import axios from 'axios';
import * as Config from '../../../../config';



export async function success(env: string, api_key: string, query: {
    payload: {
        order_user_email_id: string;
        merchant_brand_name: string;
        merchant_id: string;
        id: string;
        user_first_name: string
    },
    transaction_amount: number, wallet_address: string, symbol: string, txId: string, explore_url: string
}) {
    try {


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
    } catch (error) {
        console.log("error")
        return {
            status: false,
            message: error.message
        }
    }
}

export async function session_time_out(env: string, api_key: string, query: {
    payload: {
        order_user_email_id: string;
        merchant_brand_name: string;
        merchant_id: string;
        id: string;
        user_first_name: string;
        order_amount: string;
        order_currency_type: string;
        order_currency_symbol: string;
    }
}) {
    try {

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
    } catch (error) {
        console.log("error")
        return {
            status: false,
            message: error.message
        }
    }
}


export async function detecting(env: string, api_key: string, query: {
    payload: {
        order_user_email_id: string;
        merchant_brand_name: string;
        merchant_id: string;
        id: string;
        user_first_name: string
    }, expected_amount: string, expected_symbol: string, eta: string, wallet_address: string
}) {

    try {

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
    } catch (error) {
        console.log("error")
        return {
            status: false,
            message: error.message
        }
    }
}

export async function failure(env: string, api_key: string, query: {
    payload: {
        order_user_email_id: string;
        merchant_brand_name: string;
        merchant_id: string;
        id: string;
        user_first_name: string;
        order_amount: string;
        order_currency_type: string;
        order_currency_symbol: string
    }, wallet_address: string, asset_symbol: string, asset_amount: string
}) {
    try {

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
    } catch (error) {
        console.log("error")
        return {
            status: false,
            message: error.message
        }
    }
}