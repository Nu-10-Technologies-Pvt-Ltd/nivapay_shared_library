import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("off-chain-transactions")
@Unique(["accountId", "transactionId"])
export class offChainTransactions {
    @PrimaryGeneratedColumn("uuid")
    transactionId: string;
    @Column()
    accountId: string
    @Column()
    transactionCurrencyId: string
    @Column()
    transactionDirection: string
    @Column({ type: "numeric" })
    transactionAmount: number
    @Column()
    accountFrom: string
    @Column({ nullable: true })
    accountTo: string
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date
}