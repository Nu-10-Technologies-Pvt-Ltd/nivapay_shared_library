import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("deposit_order")
export class DepositOrderModel {

    @PrimaryColumn({ unique: true })
    id: string

    @Column({ nullable: true, type: "jsonb", default: [] })
    deposit_wallet_addressess: deposit_wallet_addressess[]

    @Column({ nullable: true, default: "PENDING" })
    order_status: string//optional

    @Column({ nullable: true })
    order_user_email_id: string//optional

    @Column({ nullable: true })
    order_currency_network: string

    @Column({ nullable: true })
    merchant_brand_name: string

    @Column({ nullable: true })
    user_action: string//optional

    @Column({ nullable: true })
    user_action_timer_status: string//optional

    @Column({ nullable: true })
    hash: string //optional

    @Column({ nullable: true })
    order_fiat_amount: string

    @Column({ nullable: true })
    order_fiat_symbol: string

    @Column({ nullable: true })
    order_crypto_amount: string

    @Column({ nullable: true })
    order_crypto_symbol: string

    @Column()
    order_amount: string

    @Column({ nullable: true })
    order_currency_symbol: string

    @Column()
    order_currency_type: string;

    @Column({ nullable: true })
    virtual_currency_id: string

    @Column({ nullable: true })
    currency_id: string // this will contain both fiat or virtual currency 

    @Column()
    merchant_user_id: string

    @Column()
    merchant_id: string

    @Column({ nullable: true })
    user_email_id: string //optional

    @Column({ nullable: true })
    user_first_name: string //optional

    @Column({ nullable: true })
    user_last_name: string //optional

    @Column()
    merchant_redirect_url: string

    @Column({ nullable: true })
    merchant_order_ref: string//optional

    @Column({ default: "user-deposit" })
    action: string //e.g. Withdraw

    @Column({ nullable: true })
    product_id: string

    @Column({ nullable: true })
    testnet: boolean;

    @Column({ nullable: true })
    redirected: boolean;

    @Column({ nullable: true })
    merchant_webhook_url: string

    @Column({ type: 'timestamptz', nullable: true })
    transaction_initiated_event_at: Date

    @Column({ nullable: true })
    detecting_eta_mins: Number

    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    createdAt: Date
}

export class deposit_wallet_addressess {
    currency_id: string
    wallet_address: string
}