import { IsNotEmpty, IsString } from "class-validator";

export class createDepositComponentOrderDto {
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