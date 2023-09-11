import { IsString, IsArray, IsEnum, IsNumber, IsBoolean, IsDate } from 'class-validator';

export class updateDepositOrderDto {

    @IsString()
    id: string;

    @IsString()
    order_status: string; // optional

    @IsString()
    order_user_email_id: string; // optional

    @IsString()
    order_currency_network: string;

    @IsString()
    merchant_brand_name: string;

    @IsString()
    user_action: string; // optional

    @IsString()
    user_action_timer_status: string; // optional

    @IsString()
    hash: string; // optional

    @IsString()
    order_fiat_amount: string;

    @IsString()
    order_fiat_symbol: string;

    @IsString()
    order_crypto_amount: string;

    @IsString()
    order_crypto_symbol: string;

    @IsString()
    order_amount: string;

    @IsString()
    order_currency_symbol: string;

    @IsString()
    order_currency_type: string;

    @IsString()
    virtual_currency_id: string;

    @IsString()
    currency_id: string; // this will contain both fiat or virtual currency

    @IsString()
    merchant_user_id: string;

    @IsString()
    merchant_id: string;

    @IsString()
    user_email_id: string; // optional

    @IsString()
    user_first_name: string; // optional

    @IsString()
    user_last_name: string; // optional

    @IsString()
    merchant_redirect_url: string;

    @IsString()
    merchant_order_ref: string; // optional

    @IsString()
    action: string; // e.g. Withdraw

    @IsString()
    product_id: string; // optional

    @IsBoolean()
    testnet: boolean; // optional

    @IsBoolean()
    redirected: boolean; // optional

    @IsString()
    merchant_webhook_url: string; // optional

    @IsDate()
    transaction_initiated_event_at: Date; // optional

    @IsNumber()
    detecting_eta_mins: number; // optional

    @IsDate()
    createdAt: Date;
}

export class deposit_wallet_addresses {
    currency_id: string
    wallet_address: string
}