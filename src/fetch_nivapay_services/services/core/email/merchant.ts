/* eslint-disable prettier/prettier */
import axios from 'axios';
import * as Config from '../../../../config';

export async function password(env: string, api_key: string, query: { payload: any }) {
    try {

        const host = Config.default.hosts.core_service[env];
        const response = await axios.post(
            `${host}/nivapay-merchant-email/send-password`,
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