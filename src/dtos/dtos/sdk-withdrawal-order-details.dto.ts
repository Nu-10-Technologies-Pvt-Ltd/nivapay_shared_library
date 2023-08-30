export class SdkWithdrawalOrderDetailsDto {

    id: string;

    order_amount: string;

    order_currency: string;

    order_currency_type: string;

    user_id: string;

    user_email_id: string; //optional

    user_name: string; //optional

    merchant_txn_id: string; //optional

    destination_wallet_address: string; //optional

    order_status: string; //optional

    order_user_email_id: string; //optional

    selected_asset_network: string; //optional

    selected_asset_amount: string;

    merchant_name: string;

    transaction_amount: string;

    transaction_asset_symbol: string;

    transaction_asset_name: string;

    transaction_asset_network: string;

    transaction_hash: string;

    transaction_hash_explorer_url: string;

    selected_asset_symbol: string; //optional

    user_action: string; //optional

    user_action_timer_status: string; //optional

    hash: string; //optional

    merchant_id: string;

    merchant_redirect_url: string;

    action: string; //e.g. Withdraw

    createdAt: Date;

    timestamp: string;
}
