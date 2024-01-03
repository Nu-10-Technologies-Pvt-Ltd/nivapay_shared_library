/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("sc-transactions")
export class ScTransactionsModel {
    @Column()
    transactionId: string;

    @Column()
    scOrderId: string;

    @Column()
    transactionHash: string;
    
    @Column()
    fromAddress: string;

    @Column()
    scAddress: string;

    @Column({ comment: "check transaction status and this gets updated if success" })
    status: string; //pending, success

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
}