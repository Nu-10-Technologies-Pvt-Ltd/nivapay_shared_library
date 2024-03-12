import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { IsWalletAddressValid } from "./custom_validators/is_wallet_address_valid.decorator";

export class CreateMerchantSelfTxnAddressDto{
    @IsNotEmpty()
    @IsString()
    merchant_id: string;
    
    @IsNotEmpty()
    @IsString()
    currency_id: string;
    
    @IsOptional()
    @IsString()
    merchant_nick_name: string;
}

export class CreateWihdrawWalletDto {
    @IsNotEmpty()
    @IsString()
    merchant_id: string;
    
    @IsNotEmpty()
    @IsString()
    currency_id: string;
    
    @IsNotEmpty()
    @IsString()
    merchant_nick_name: string;

    @IsNotEmpty()
    @IsString()
    @IsWalletAddressValid()
    wallet_address: string;
}