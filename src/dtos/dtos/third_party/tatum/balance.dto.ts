import { IsString } from "class-validator";

export class TatumBalanceDto{
    @IsString()
    address: string;
    
    @IsString()
    currency_id: string;
}