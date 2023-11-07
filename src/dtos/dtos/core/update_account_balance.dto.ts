import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateAccountBalanceDTO {
    @IsNotEmpty()
    @IsString()
    account_id: string;

    @IsOptional()
    @IsString()
    order_id?: string;
    
    @IsNotEmpty()
    @IsString()
    transaction_id: string;

    @IsNotEmpty()
    @IsString()
    currency_id: string;

    @IsNotEmpty()
    @IsString()
    incoming_amount: string;

    @IsNotEmpty()
    @IsString()
    outgoing_amount: string;
}