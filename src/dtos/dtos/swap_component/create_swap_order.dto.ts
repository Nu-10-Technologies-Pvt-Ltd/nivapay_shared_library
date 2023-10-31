import { IsNotEmpty, IsString } from "class-validator";

export class createSwapOrderDto {
    id?: string;
    order_status?: string;

    @IsNotEmpty()
    @IsString()
    swap_in_currency_id: string;

    @IsNotEmpty()
    @IsString()
    swap_in_wallet_id: string;

    @IsNotEmpty()
    @IsString()
    swap_in_amount: string;

    @IsNotEmpty()
    @IsString()
    swap_out_currency_id: string;

    @IsNotEmpty()
    @IsString()
    swap_out_wallet_address: string;
}