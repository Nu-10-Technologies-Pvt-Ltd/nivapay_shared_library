export declare class UserDepositTransactions {
    id: string;
    order_id: string;
    transactionCoinId: string;
    sender_wallet_addresses: string[];
    transaction_amount: number;
    transaction_asset_symbol: string;
    destination_wallet_address: string;
    transaction_asset_network: string;
    transaction_hash: string;
    transaction_asset_name: string;
    transaction_hash_explorer_url: string;
    order_amount: number;
    networkFeeAmount: number;
    networkFeeCoinId: string;
    confirmedAt: Date;
    createdAt: string;
}
