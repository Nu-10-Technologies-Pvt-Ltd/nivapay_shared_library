import axios from 'axios';
import * as Config from '../../../config';
import { AccountsEntityType, CreateAccountDTO } from '../../../dtos';


export async function createMerchantUserAccount (env: string, api_key: string, query: {
    account_name?: string
    merchant_id: string;
    merchant_user_id: string;
}) {
    const host = Config.default.hosts.core_service[env];

    const data = new CreateAccountDTO();
    data.accountName = query.account_name ? query.account_name : `ACCU${query.merchant_id}`;
    data.customerId = query.merchant_id;
    data.entityType = AccountsEntityType.MerchantUser;
    data.merchantUserId = query.merchant_user_id;
    
    const response = await axios.post(
        `${host}/nivapay/accounts/create`,
        data,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function createUserAccount (env: string, api_key: string, query: {
    account_name?: string
    user_id: string;
}) {
    const host = Config.default.hosts.core_service[env];

    const data = new CreateAccountDTO();
    data.accountName = query.account_name ? query.account_name : `ACC${query.user_id}`;
    data.customerId = "";
    data.entityType = AccountsEntityType.User;
    data.merchantUserId = query.user_id;
    
    const response = await axios.post(
        `${host}/nivapay/accounts/create`,
        data,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function createNivapayAccount (env: string, api_key: string, query: {
    account_name: string
}) {
    const host = Config.default.hosts.core_service[env];

    const data = new CreateAccountDTO();
    data.accountName = query.account_name;
    data.customerId = "";
    data.entityType = AccountsEntityType.Nivapay;
    data.merchantUserId = "";
    
    const response = await axios.post(
        `${host}/nivapay/accounts/create`,
        data,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

export async function createMerchantAccount (env: string, api_key: string, query: {
    account_name?: string;
    merchant_id: string;
}) {
    const host = Config.default.hosts.core_service[env];

    const data = new CreateAccountDTO();
    data.accountName = query.account_name ? query.account_name : `ACC${query.merchant_id}`;
    data.customerId = query.merchant_id;
    data.entityType = AccountsEntityType.Merchant;
    data.merchantUserId = "";
    
    const response = await axios.post(
        `${host}/nivapay/accounts/create`,
        data,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data
}

