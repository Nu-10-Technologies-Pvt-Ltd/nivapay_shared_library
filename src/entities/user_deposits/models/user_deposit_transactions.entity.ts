import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user-deposit-transactions")
export class UserDepositTransactions {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    order_id: string;

    @Column({ nullable: true })
    transactionCoinId: string

    @Column({ type: "jsonb" })
    sender_wallet_addresses: string[]

    @Column({ type: "numeric" })
    transaction_amount: number

    @Column()
    transaction_asset_symbol: string

    @Column()
    destination_wallet_address: string

    @Column()
    transaction_asset_network: string

    @Column({ unique: true })
    transaction_hash: string

    @Column()
    transaction_asset_name: string

    @Column()
    transaction_hash_explorer_url: string

    @Column({ type: "numeric" })
    order_amount: number

    @Column({ type: "numeric", nullable: true })
    networkFeeAmount: number

    @Column({ nullable: true })
    networkFeeCoinId: string

    @Column({ type: 'string', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
    confirmedAt: Date

    @CreateDateColumn({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
    createdAt: string
}