export declare class UpdateBalanceDTO {
    merchant_id: string;
    product_id: string;
    crypto_coin_id: string;
    order_id: string;
    merchant_txn_id: string;
    incoming_amount: number;
    outgoing_amount: number;
    incoming_service_fee: number;
    outgoing_service_fee: number;
    incoming_network_fee: number;
    outgoing_network_fee: number;
    digit: number;
}
