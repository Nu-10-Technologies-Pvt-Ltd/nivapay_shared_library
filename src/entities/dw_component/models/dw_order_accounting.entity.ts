/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm"

@Entity("dw_order_accounting")
@Unique(["order_id", "transaction_id"])
export class DwComponentOrderAccountingModel {
    @PrimaryGeneratedColumn('uuid')
    accountingEntryId: string;

    @Column()
    order_id: string;

    @Column()
    order_type: string;

    @Column({ type: 'jsonb', default: [], comment: "TransactionId from the on/off chain transactions table", nullable: true })
    transaction_id: string[];

    @Column({ comment: "Currency Id of the transaction", nullable: true })
    transactionCurrencyId: string;

    @Column({ comment: "Gross amount which was received before deducting the applicable fee" })
    grossAmount: string;

    @Column({ comment: "Service fee incurred as per config" })
    serviceFee: string;

    @Column({ comment: "Network fee estimated for transfer", nullable: true, default: '0' })
    estimatedNetworkFee: string;

    @Column({ comment: "Network fee incurred for transfer", nullable: true, default: '0' })
    actualNetworkFee: string;

    @Column({ comment: "Net amount which was received after deducting the applicable fee" })
    netAmount: string;

    @Column({ type: 'numeric', default: 0, nullable: true, comment: "Gross amount USD value" })
    grossAmount_$: number;

    @Column({ type: 'numeric', default: 0, nullable: true, comment: "Service fee USD value" })
    serviceFee_$: number;

    @Column({ type: 'numeric', default: 0, nullable: true, comment: "Estimated network fee USD value" })
    estimatedNetworkFee_$: number;

    @Column({ type: 'numeric', default: 0, nullable: true, comment: "Net amount USD value" })
    netAmount_$: number;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
}