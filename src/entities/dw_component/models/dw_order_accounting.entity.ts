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

    @Column({ type: "numeric", default: 0, comment: "Gross amount which was received before deducting the applicable fee" })
    grossAmount: number;

    @Column({ type: "numeric", default: 0, comment: "Service fee incurred as per config" })
    serviceFee: number;

    @Column({ type: "numeric", default: 0, comment: "Network fee incurred for transfer" })
    networkFee: number;

    @Column({ type: "numeric", default: 0, comment: "Net amount which was received after deducting the applicable fee" })
    netAmount: number;

    @Column({type:'numeric', default:0, nullable: true, comment: "Gross amount USD value"})
    grossAmount_$: number;

    @Column({type:'numeric', default:0, nullable: true, comment: "Net amount USD value"})
    netAmount_$: number;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
}