import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class createSCOrderDto {
    id?: string;
    order_status?: string;

    @IsNotEmpty()
    @IsString()
    smart_contract_id: string;

    @IsNotEmpty()
    functional_args: any;

    @IsNotEmpty()
    @IsString()
    pay_from_wallet_id: string;

    @IsNotEmpty()
    @IsString()
    amount: string;

    @IsOptional()
    @IsString()
    custom_gas_price: string;

    @IsOptional()
    @IsString()
    custom_gas_limit: string;
}