import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("swap_transactions")
export class swapTransactions {
    @PrimaryGeneratedColumn("uuid")
    transactionId: string;

    @Column()
    swap_id: string

    @Column()
    transactionHash: string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date
}