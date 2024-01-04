import axios from 'axios';
import * as Config from '../../../config';

export async function getDetailsById (env: string, api_key: string, query: {nivapay_smart_contract_id: string}) {
    const host = Config.default.hosts.core_service[env];
    const response = await axios.get(
        `${host}/nivapay/smart_contracts/${query.nivapay_smart_contract_id}`,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}