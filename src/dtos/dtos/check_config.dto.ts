import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class checkConfigDto {
    @IsNotEmpty()
    @IsString()
    merchant_id: string;

    @IsOptional()
    @IsArray()
    product_ids?: string[];
    
    @IsOptional()
    @IsArray()
    crypto_currency_ids?: string[];

    @IsOptional()
    @IsArray()
    fiat_currency_ids?: string[];

    checks_required: ChecksRequiredDto;
}

export class ChecksRequiredDto{
    @IsNotEmpty()
    @IsBoolean()
    nvp_product_config: boolean;

    @IsNotEmpty()
    @IsBoolean()
    nvp_crypto_currency_config: boolean;

    @IsNotEmpty()
    @IsBoolean()
    nvp_fiat_currency_config: boolean;

    @IsNotEmpty()
    @IsBoolean()
    merchant_product_config: boolean;

    @IsNotEmpty()
    @IsBoolean()
    merchant_crypto_currency_config: boolean;

    @IsNotEmpty()
    @IsBoolean()
    merchant_service_fee_config: boolean;

    @IsNotEmpty()
    @IsBoolean()
    merchant_network_fee_config: boolean;

    @IsNotEmpty()
    @IsBoolean()
    merchant_fiat_currency_config: boolean;
}