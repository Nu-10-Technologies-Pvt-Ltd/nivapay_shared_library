export declare class DepositOrderModel {
    id: string;
    deposit_wallet_addressess: deposit_wallet_addressess[];
    order_status: string;
    order_user_email_id: string;
    order_currency_network: string;
    merchant_brand_name: string;
    user_action: string;
    user_action_timer_status: string;
    hash: string;
    order_fiat_amount: string;
    order_fiat_symbol: string;
    order_crypto_amount: string;
    order_crypto_symbol: string;
    order_amount: string;
    order_currency_symbol: string;
    order_currency_type: string;
    virtual_currency_id: string;
    currency_id: string;
    merchant_user_id: string;
    merchant_id: string;
    user_email_id: string;
    user_first_name: string;
    user_last_name: string;
    merchant_redirect_url: string;
    merchant_order_ref: string;
    action: string;
    product_id: string;
    testnet: boolean;
    redirected: boolean;
    merchant_webhook_url: string;
    transaction_initiated_event_at: Date;
    detecting_eta_mins: Number;
    createdAt: Date;
}
export declare class deposit_wallet_addressess {
    currency_id: string;
    wallet_address: string;
}
