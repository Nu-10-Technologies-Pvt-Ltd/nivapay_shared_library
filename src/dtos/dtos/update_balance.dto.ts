import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateBalanceDTO {
    @IsNotEmpty()
    @IsString()
    merchant_id: string;

    @IsNotEmpty()
    @IsString()
    product_id: string;

    @IsNotEmpty()
    @IsString()
    crypto_coin_id: string;

    @IsNotEmpty()
    @IsString()
    order_id: string;

    @IsNotEmpty()
    @IsString()
    merchant_txn_id: string;

    @IsNotEmpty()
    @IsNumber()
    incoming_amount: number;

    @IsNotEmpty()
    @IsNumber()
    outgoing_amount: number;

    @IsNotEmpty()
    @IsNumber()
    incoming_service_fee: number;

    @IsNotEmpty()
    @IsNumber()
    outgoing_service_fee: number;

    @IsNotEmpty()
    @IsNumber()
    incoming_network_fee: number;

    @IsNotEmpty()
    @IsNumber()
    outgoing_network_fee: number;

    @IsNotEmpty()
    @IsNumber()
    digit: number
}