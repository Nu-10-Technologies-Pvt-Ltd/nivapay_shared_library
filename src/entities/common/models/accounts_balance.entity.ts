import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Accounts_Balance {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    account_id: string;

    @Column({ nullable: true })
    crypto_coin_id: string

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

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date
    
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date
}