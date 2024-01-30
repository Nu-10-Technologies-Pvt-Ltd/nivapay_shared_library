import { IsString } from "class-validator";

export class TatumTransferDto{
    @IsString()
    amount: string;
    
    @IsString()
    from_address: string;
    
    @IsString()
    to_address: string;
    
    @IsString()
    currency_id: string;
}