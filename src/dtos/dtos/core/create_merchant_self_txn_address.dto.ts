import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateMerchantSelfTxnAddressDto{
    @IsNotEmpty()
    @IsString()
    merchant_id: string;
    
    @IsNotEmpty()
    @IsString()
    currency_id: string;
    
    @IsNotEmpty()
    @IsString()
    wallet_id: string;
    
    @IsOptional()
    @IsString()
    merchant_nick_name: string;
}