/* eslint-disable prettier/prettier */
import {
    IsString,
    IsEmail,
    IsNotEmpty,
    IsDefined,
    IsOptional,
} from 'class-validator';

export class onrampOrderDto {
    @IsString()
    @IsOptional()
    id: string;

    @IsString()
    order_status: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    order_fiat_amount: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    order_fiat_symbol: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    convert_to_crypto_symbol: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    convert_to_crypto_network: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    convert_to_crypto_contractAddress: string;

    @IsString()
    merchant_id: string;

    @IsString()
    @IsOptional()
    merchant_brand_name: string;

    @IsString()
    @IsOptional()
    merchant_user_id: string;

    @IsString()
    transak_order_id: string;

    @IsEmail()
    user_email_id: string;

    @IsString()
    @IsOptional()
    user_first_name: string;

    @IsString()
    @IsOptional()
    user_last_name: string;

    @IsString()
    @IsOptional()
    user_mobileNumber: string;

    @IsString()
    @IsOptional()
    user_dob: string;

    @IsString()
    @IsOptional()
    user_addressLine1: string;

    @IsString()
    @IsOptional()
    user_addressLine2: string;

    @IsString()
    @IsOptional()
    user_city: string;

    @IsString()
    @IsOptional()
    user_state: string;

    @IsString()
    @IsOptional()
    user_postCode: string;

    @IsString()
    @IsOptional()
    user_countryCode: string;
}
