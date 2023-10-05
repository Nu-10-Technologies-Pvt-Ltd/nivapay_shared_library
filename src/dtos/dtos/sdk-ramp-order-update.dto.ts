import { IsOptional, IsString, IsNumber, IsNotEmpty, IsEmail } from 'class-validator';

export class SdkRampOrderUpdateDto {
    @IsOptional()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    order_fiat_amount: string;

    @IsNotEmpty()
    @IsString()
    order_fiat_symbol: string;

    @IsOptional()
    @IsNumber()
    order_crypto_amount: number;

    @IsOptional()
    @IsString()
    transaction_crypto__amount: string;

    @IsOptional()
    @IsString()
    transaction_crypto_symbol: string;

    @IsOptional()
    @IsString()
    transaction_crypto_asset: string;

    @IsOptional()
    @IsString()
    transaction_hash: string;

    @IsOptional()
    @IsString()
    transaction_hash_explorer_url: string;

    @IsNotEmpty()
    @IsString()
    action: string;

    @IsNotEmpty()
    @IsString()
    convert_to_crypto_symbol: string;

    @IsNotEmpty()
    @IsString()
    convert_to_crypto_network: string;

    @IsOptional()
    @IsString()
    user_id: string;

    @IsNotEmpty()
    @IsEmail()
    user_email_id: string;

    @IsOptional()
    @IsString()
    hash: string;

    @IsOptional()
    @IsString()
    user_first_name: string;

    @IsOptional()
    @IsString()
    user_last_name: string;

    @IsOptional()
    @IsString()
    user_mobileNumber: string;

    @IsOptional()
    @IsString()
    user_dob: string;

    @IsOptional()
    @IsString()
    user_addressLine1: string;

    @IsOptional()
    @IsString()
    user_addressLine2: string;

    @IsOptional()
    @IsString()
    user_city: string;

    @IsOptional()
    @IsString()
    user_state: string;

    @IsOptional()
    @IsString()
    user_postCode: string;

    @IsOptional()
    @IsString()
    user_countryCode: string;

    @IsString()
    @IsOptional()
    merchant_id: string;

    @IsNotEmpty()
    @IsString()
    merchant_redirect_url: string;

    @IsNotEmpty()
    @IsString()
    merchant_webhook_url: string;

    @IsOptional()
    @IsString()
    merchant_txn_id: string;

    @IsOptional()
    @IsString()
    merchant_user_id: string;

    @IsOptional()
    @IsString()
    order_user_email_id: string;

    @IsOptional()
    @IsString()
    order_status: string;

    @IsOptional()
    @IsString()
    user_wallet_address: string;

    @IsOptional()
    @IsString()
    nivapay_hash: string;

    @IsOptional()
    @IsString()
    merchant_name: string;

    @IsOptional()
    @IsString()
    is_autofilluserdata: string;

    @IsString()
    @IsOptional()
    disableWalletAddressForm: string;

    @IsOptional()
    @IsString()
    transak_id: string;

    @IsOptional()
    @IsString()
    isBuyOrSell: string;

    @IsOptional()
    @IsString()
    transfer_id: string;

    @IsOptional()
    @IsString()
    order_virtual_currency_id: string;

    @IsOptional()
    @IsString()
    ramp_order_status: string

    @IsOptional()
    @IsString()
    transfer_order_status: string;

    @IsOptional()
    @IsString()
    product_id: string

}
