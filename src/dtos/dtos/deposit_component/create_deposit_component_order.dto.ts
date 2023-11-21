import { IsNotEmpty, IsString } from "class-validator";

export class createOffChainDepositOrderDto {
    id?: string;
    order_status?: string;

    @IsNotEmpty()
    @IsString()
    from_account_id: string;
    
    @IsNotEmpty()
    @IsString()
    to_account_id: string;
    
    @IsNotEmpty()
    @IsString()
    transaction_currency_id: string
    
    @IsNotEmpty()
    @IsString()
    transaction_amount: string;
}

export class createOnChainDepositOrderDto {
    id?: string;
    order_status?: string;

    @IsNotEmpty()
    @IsString()
    from_wallet_id: string;

    @IsNotEmpty()
    @IsString()
    to_wallet_id: string;
    
    @IsNotEmpty()
    @IsString()
    transaction_currency_id: string
    
    @IsNotEmpty()
    @IsString()
    transaction_amount: string;
}