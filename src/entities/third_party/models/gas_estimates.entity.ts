import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm"

@Entity("gas_estimates_record")
// @Unique(["orderId", "transactionId"])
export class GasEstimatesRecordModal {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ comment: "Order ID for which accounting entry is being maintained" })
    currency_id: string;

    @Column({ comment: "Onchain transaction id", nullable: true })
    gas_fee: string;

    @Column({ comment: "ID of virtual currency which will be paid to the SC function" })
    gas_limit: string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @Column({ type: "timestamp" })
    expiryAt: Date;
}