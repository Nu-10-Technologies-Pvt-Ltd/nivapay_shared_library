import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("deposit-order-address")
export class DepositOrderAddress {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: true })
    currency_id: string;

    @Column({ nullable: true })
    order_id: string

    @Column({ nullable: true })
    wallet_address: string;

    @Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
    checkoutAt: Date;

    @Column({ type: 'timestamp', nullable: true, default: () => `CURRENT_TIMESTAMP + INTERVAL '1 day'` })
    expirationEta: Date

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date
}
