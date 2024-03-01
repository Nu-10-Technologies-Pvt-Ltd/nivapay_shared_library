/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, Unique, PrimaryGeneratedColumn } from "typeorm"

@Entity("sc-transactions")
@Unique(["scOrderId", "transactionHash"])
export class ScTransactionsModel {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    scOrderId: string;

    @Column()
    transactionHash: string;

    @Column({ nullable: true })
    onchainTxnId: string;

    @Column({ comment: "check transaction status and this gets updated if success" })
    status: string; //SC_TXN_STATUS

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
}

export enum SC_TXN_STATUS {
    PENDING = 'PENDING',
    PROCESSING = 'PROCESSING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED'
}