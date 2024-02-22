import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('crypto_order_accounting')
@Unique(['order_id', 'transaction_id'])
export class CryptoOrderAccountingModel {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    order_id: string;

    @Column()
    transaction_id: string

    @Column()
    currency_id: string;

    @Column()
    grossAmount: string;

    @Column()
    serviceFee: string;

    @Column()
    actualNetworkFeeByUser: string;

    @Column()
    netAmount: string;

    @Column({ type: 'numeric', default: 0, nullable: true })
    grossAmount_$: number;

    @Column({ type: 'numeric', default: 0, nullable: true })
    serviceFee_$: number;

    @Column({ type: 'numeric', default: 0, nullable: true })
    netAmount_$: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
}