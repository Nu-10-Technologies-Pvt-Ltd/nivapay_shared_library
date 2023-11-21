import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("deposit_component_transactions")
export class DepositComponentTransactionsModel {
    @PrimaryGeneratedColumn("uuid")
    transactionId: string;

    @Column({comment: "Deposit component order id"})
    deposit_id: string

    @Column()
    transactionHash: string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date
}