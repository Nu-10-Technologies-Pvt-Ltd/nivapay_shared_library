import axios from 'axios';
import * as Config from '../../../config';
import { HOUSE_WALLET_TYPES } from '../../../enums';

export async function transferFromHouseWallet(
    env: string,
    api_key: string,
    query: {house_wallet_type:string, currencyId: string, to: string, amount: string}
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/nivapay-housewallet/transfer`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function getBalanceFromHouseWallet(
    env: string,
    api_key: string,
    query: {house_wallet_type:string, currencyId: string}
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/nivapay-housewallet/get/balance`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function getNativeBalanceFromHouseWallet(
    env: string,
    api_key: string,
    query: {house_wallet_type:string, currencyId: string}
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/nivapay-housewallet/get/native/balance`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}


export async function estimateGasFromHouseWallet(
    env: string,
    api_key: string,
    query: {house_wallet_type:string, currencyId: string, to: string, amount: string}
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/nivapay-housewallet/estimate/gas`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function estimateGasFeeForFundingToTreasury(
    env: string,
    api_key: string,
    query: {gasCurrencyId: string, treasuryCurrencyId: string, amount: string}
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/nivapay-housewallet/estimate/gas/funding/gas`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function gasFeeFundingToTreasury(
    env: string,
    api_key: string,
    query: {gasCurrencyId: string, treasuryCurrencyId: string, amount: string}
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/nivapay-housewallet/gas/funding`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function checkHouseWalletExists(
    env: string,
    api_key: string,
    query: {currency_id: string, wallet_type: HOUSE_WALLET_TYPES}
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/nivapay-housewallet/exists`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}

export async function getHouseWalletDetails(
    env: string,
    api_key: string,
    query: {currency_id: string, wallet_type: HOUSE_WALLET_TYPES}
) {
    const host = Config.default.hosts.third_party_service[env];
    const response = await axios.post(
        `${host}/nivapay-housewallet/get/details`,
        query,
        {
            headers: {
                'x-api-key': api_key,
            },
        }
    )
    return response.data ? response.data : null
}