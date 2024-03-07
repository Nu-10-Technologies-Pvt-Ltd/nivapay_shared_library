import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm"

@Entity("sc-order-accounting")
@Unique(["orderId", "transactionId"])
export class ScOrderAccountingModal {
    @PrimaryGeneratedColumn('uuid')
    accountingEntryId: string;

    @Column({ comment: "Order ID for which accounting entry is being maintained" })
    orderId: string;

    @Column({ comment: "Onchain transaction id", nullable: true })
    transactionId: string;

    @Column({ comment: "ID of virtual currency which will be paid to the SC function" })
    payableCurrencyId: string;

    @Column({ comment: "Amount in payableCurrencyId units paid by the user" })
    grossAmount: string;

    @Column({ comment: "Service Fee applicable on grossAmount" })
    serviceFee: string;

    @Column({ comment: "Estimated network fee to be sent along with this on-chain transaction" })
    networkFeeEstimated: string;

    @Column({ comment: "Actual network fee during on-chain transaction", nullable: true })
    networkFeeActual: string;

    @Column({ comment: "ID of virtual currency in which network fee is charged" })
    networkFeeCurrencyId: string;

    @Column({ comment: "Net amount to be paid to the SC function" })
    netAmount: string;

    @Column({ type: 'numeric', default: 0, nullable: true })
    grossAmount_$: number;

    @Column({ type: 'numeric', default: 0, nullable: true })
    serviceFee_$: number;

    @Column({ type: 'numeric', default: 0, nullable: true })
    networkFeeEstimated_$: number;

    @Column({ type: 'numeric', default: 0, nullable: true })
    netAmount_$: number;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
}