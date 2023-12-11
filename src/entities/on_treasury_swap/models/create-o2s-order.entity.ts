/* eslint-disable prettier/prettier */
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('onramp-to-treasury-swap-orders')
export class onrampToTreasurySwapOrders {
    @PrimaryColumn()
    id: string; // on ramp order id   :string

    @Column({ default: 'PENDING' })
    order_status: string;

    @Column({ default: "PENDING" })
    onramp_order_status: string;

    @Column()
    convert_to_crypto_symbol: string;

    @Column()
    convert_to_crypto_network: string;

    @Column()
    convertToVirtualCurrencyId: string;

    @Column({nullable: true})
    merchant_txn_id: string;

    @Column()
    merchant_redirect_url: string;

    @Column()
    merchant_webhook_url: string;

    @Column()
    transfer_to_wallet_address: string;

    @Column({nullable: true})
    convert_to_crypto_contractAddress: string

    @Column({ default: "PENDING" })
    swap_order_status: string;

    @Column({ nullable: true })
    swap_order_id: string;

    @Column()
    onramp_order_id: string;

    @Column()
    redirected: boolean;

    @Column({ nullable: true })
    order_user_email_id: string;

    @Column({ type: "jsonb" })
    conversionRoute: any

    @Column()
    hash: string;

    @Column()
    gateway_url: string;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
}
