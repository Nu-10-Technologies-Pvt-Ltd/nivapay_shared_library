import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from "typeorm"

@Entity("treasurySwap-order-accounting")
@Unique(["order_id", "transaction_id"])
export class treasurySwapOrderAccountingModal {
    @PrimaryGeneratedColumn('uuid')
    accountingEntryId: string;

    @Column()
    orderId: string;

    @Column()
    transactionId: string;

    @Column()
    swapInCurrencyId: string;

    @Column()
    swapInGrossAmount: string;

    @Column()
    serviceFee: string;

    @Column()
    swapInNetworkFeeEstimated: string;

    @Column()
    swapInNetAmount: string;

    @Column()
    swapOutCurrencyId: string;

    @Column()
    swapOutGrossAmount: string;

    @Column()
    swapOutNetworkFeeEstimated: string;

    @Column()
    swapOutNetAmount: string;

    @Column({ type: 'numeric', default: 0, nullable: true })
    swapInGrossAmount_$: number;

    @Column({ type: 'numeric', default: 0, nullable: true })
    serviceFee_$: number;

    @Column({ type: 'numeric', default: 0, nullable: true })
    swapInNetworkFeeEstimated_$: number;

    @Column({ type: 'numeric', default: 0, nullable: true })
    swapInNetAmount_$: number;

    @Column({ type: 'numeric', default: 0, nullable: true })
    swapOutGrossAmount_$: number;

    @Column({ type: 'numeric', default: 0, nullable: true })
    swapOutNetworkFeeEstimated_$: number;

    @Column({ type: 'numeric', default: 0, nullable: true })
    swapOutNetAmount_$: number;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;
}