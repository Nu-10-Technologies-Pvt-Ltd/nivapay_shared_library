export declare class DepositOrderAccounting {
    id: string;
    order_id: string;
    transactionId: string;
    coin_type: string;
    coin_id: string;
    grossAmount: number;
    serviceFeeByMerchant: number;
    serviceFeeByUser: number;
    estimatedNetworkFeeByMerchant: number;
    actualNetworkFeeByUser: number;
    estimatedNetworkFeeByUser: number;
    netAmount: number;
    new_incoming_balance: number;
    new_outgoing_balance: number;
    createdAt: string;
}
