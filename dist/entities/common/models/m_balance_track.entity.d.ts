export declare class M_Balance_Track {
    id: string;
    merchant_id: string;
    crypto_coin_id: string;
    currency: string;
    network: string;
    balance_in_crypto: number;
    incoming_in_crypto: number;
    network_fee_in_crypto: number;
    nivapay_fee_in_crypto: number;
    total_incoming_fee_in_crypto: number;
    outgoing_in_crypto: number;
    outgoing_network_fee_in_crypto: number;
    outgoing_nivapay_fee_in_crypto: number;
    total_outgoing_fee_in_crypto: number;
    created_at: Date;
}
