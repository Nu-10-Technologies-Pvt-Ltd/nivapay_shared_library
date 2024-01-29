import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { COMPONENT_ORDER_STATUS } from '../../../enums';

@Entity('crypto_order')
export class CryptoOrderModel {
    @PrimaryColumn()
    id: string;

    @Column({default: COMPONENT_ORDER_STATUS.PENDING})
    order_status: string;
    
    @Column()
    merchant_id: string;

    @Column()
    merchant_user_id: string;
    
    @Column()
    crypto_currency_id: string;

    @Column()
    amount: string;

    @Column({ nullable: true, type: "jsonb", default: [] })
    crypto_wallet_addresses: deposit_wallet_addresses[]

    @Column({ type: 'timestamp', nullable: true })
    transaction_initiated_event_at: Date

    @Column({ nullable: true })
    detecting_eta_mins: Number

    @Column({nullable: true})
    order_status_detail: string;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;
}

export class deposit_wallet_addresses {
    currency_id: string
    wallet_id: string
}