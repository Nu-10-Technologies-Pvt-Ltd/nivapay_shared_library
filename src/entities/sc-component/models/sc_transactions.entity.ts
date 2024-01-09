/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity("sc-transactions")
export class ScTransactionsModel {

    @Column()
    id: string;

    @PrimaryColumn()
    scOrderId: string;

    @Column()
    transactionHash: string;

    @Column({nullable: true})
    onchainTxnId: string;
    
    // @Column()
    // fromAddress: string;

    // @Column()
    // scAddress: string;

    @Column({ comment: "check transaction status and this gets updated if success" })
    status: string; //SC_TXN_STATUS

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
}

export enum SC_TXN_STATUS{
    PENDING = 'PENDING',
    PROCESSING = 'PROCESSING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED'
}