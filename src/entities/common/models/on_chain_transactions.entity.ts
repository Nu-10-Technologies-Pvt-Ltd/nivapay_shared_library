import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("on-chain-transactions")
export class onChainTransactions {
    @PrimaryGeneratedColumn("uuid")
    transactionId: string;

    @Column({ nullable: true })
    status: boolean;

    @Column()
    walletId: string;

    @Column()
    transactionHash: string; // NVP=> merchant, merchant-user, user

    @Column()
    transactionDirection: string;

    @Column({ nullable: true })
    transactionCurrencyId: string;

    @Column({ nullable: true })
    transactionAmount: string

    @Column({ nullable: true })
    networkFeeCurrencyId: string;

    @Column({ nullable: true })
    networkFeeAmount: string;

    @Column({ type: 'jsonb' })
    destinationAddresses: any;

    @Column({ type: 'jsonb' })
    senderAddresses: any;

    @Column({ nullable: true })
    confirmedAt: string;

    @CreateDateColumn({ nullable: true, type: "timestamp" })
    createdAt: string;
}