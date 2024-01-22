import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ramp_treasury_transactions")
export class OnRampTreasuryTransactionModel {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    ramp_order_id: string

    @Column()
    transactionHash: string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date
}