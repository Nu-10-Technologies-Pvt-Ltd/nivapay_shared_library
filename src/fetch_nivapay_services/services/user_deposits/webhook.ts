import axios from 'axios';
import * as Config from '../../../config';
import { UserDepositsMerchantWebhookDto } from '../../../dtos/dtos/user-deposits-webhook.dto';

export async function sendMerchantWebhook(
    env: string,
    api_key: string,
    query: UserDepositsMerchantWebhookDto
) {

    const host = Config.default.hosts.user_deposits_service[env];
    const response = await axios.post(
        `${host}/merchant-callback`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )

    return response.data ? response.data : null
}
