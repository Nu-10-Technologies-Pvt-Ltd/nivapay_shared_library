import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({ type: 'jsonb' })
    destinationAddresses: any;

    @Column({ type: 'jsonb' })
    senderAddresses: any;

    @Column({ nullable: true })
    confirmedAt: string;

    @Column({ nullable: true, type: "timestamp" })
    createdAt: string;
}