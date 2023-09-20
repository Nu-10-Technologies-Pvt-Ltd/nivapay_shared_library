import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class M_Balance_Track {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    merchant_id: string;

    @Column({ nullable: true })
    crypto_coin_id: string

    @Column()
    currency: string;

    @Column()
    network: string

    @Column({ type: "numeric", default: 0 })
    balance_in_crypto: number;

    @Column({ type: "numeric", default: 0 })
    incoming_in_crypto: number;

    @Column({ type: "numeric", default: 0 })
    network_fee_in_crypto: number;

    @Column({ type: "numeric", default: 0 })
    nivapay_fee_in_crypto: number;

    @Column({ type: "numeric", default: 0, nullable: true })
    total_incoming_fee_in_crypto: number;

    @Column({ type: "numeric", default: 0 })
    outgoing_in_crypto: number;

    @Column({ type: "numeric", default: 0, nullable: true })
    outgoing_network_fee_in_crypto: number;

    @Column({ type: "numeric", default: 0, nullable: true })
    outgoing_nivapay_fee_in_crypto: number;

    @Column({ type: "numeric", default: 0, nullable: true })
    total_outgoing_fee_in_crypto: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date
}