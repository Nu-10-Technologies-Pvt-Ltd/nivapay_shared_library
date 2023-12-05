import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("dw_transactions")
export class DwComponentTransactionsModel {
    @PrimaryGeneratedColumn("uuid")
    transactionId: string;

    @Column({comment: "Deposit component order id"})
    deposit_id: string

    @Column()
    transactionHash: string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date
}