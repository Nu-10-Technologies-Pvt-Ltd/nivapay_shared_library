import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("on-chain-transactions")
export class onChainTransactions {
    @PrimaryGeneratedColumn("uuid")
    transactionId: string;

    @Column()
    walletId: string;

    @Column()
    transactionHash: string; // NVP=> merchant, merchant-user, user

    @Column()
    transactionDirection: string;

    @Column()
    transactionCurrencyId: string;

    @Column()
    transactionAmount: string

    @Column()
    networkFeeCurrencyId: string;

    @Column()
    networkFeeAmount: string;

    @Column()
    destinationAddresses: string[];

    @Column()
    senderAddresses: string[];

    @Column({ nullable: true })
    confirmedAt: string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
}