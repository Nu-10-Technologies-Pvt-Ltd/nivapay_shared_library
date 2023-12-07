/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("dw_order_accounting")
export class DwComponentOrderAccountingModel {
    @PrimaryGeneratedColumn('uuid')
    accountingEntryId: string;

    @Column()
    order_id: string;

    @Column()
    order_type: string;

    @Column({ type:'jsonb', default:[], comment: "TransactionId from the on/off chain transactions table" })
    transaction_id: string[];

    @Column({ comment: "Gross amount which was received before deducting the applicable fee" })
    grossAmount: string;

    @Column({ comment: "Service fee incurred as per config" })
    serviceFee: string;

    @Column({ comment: "Network fee incurred for transfer" })
    networkFee: string;

    @Column({ comment: "Net amount which was received after deducting the applicable fee" })
    netAmount: string;

    @Column({type:'numeric', default:0, nullable: true, comment: "Gross amount USD value"})
    grossAmount_$: number;

    @Column({type:'numeric', default:0, nullable: true, comment: "Net amount USD value"})
    netAmount_$: number;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
}