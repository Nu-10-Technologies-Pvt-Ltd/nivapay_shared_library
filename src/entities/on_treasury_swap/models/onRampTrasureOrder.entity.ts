import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("onramp-to-treasury-swap-order")
export class onrampTreasureSwapOrder {
    @PrimaryColumn()
    swap_id: string;

    @Column()
    id: string; // on ramp order id   :string

    @Column({ default: "PENDING" })
    onramp_order_status: string

    @Column({ default: "PENDING" })
    swap_order_status: string

    @Column({ default: "PENDING" })
    order_status: string

    @Column()
    order_fiat_amount: string

    @Column()
    order_fiat_symbol: string

    @Column()
    fiat_currency_id: string

    @Column()
    order_fiat_name: string

    @Column()
    convert_to_crypto_symbol: string

    @Column()
    convert_to_crypto_network: string

    @Column({ nullable: true })
    convert_to_crypto_contractAddress: string

    @Column()
    convertToVirtualCurrencyId: string

    @Column()
    convertToCryptoName: string

    @Column({ type: "jsonb" })
    conversionRoute: any

    @Column()
    transfer_to_wallet_address: string

    @Column()
    onrampVirtualCurrencyId: string

    @Column({ nullable: true })
    transak_crypto_symbol: string

    @Column(({ nullable: true }))
    transak_crypto_network: string

    @Column()
    merchant_id: string

    @Column()
    merchant_brand_name: string

    @Column({ nullable: true })
    merchant_txn_id: string

    @Column()
    merchant_redirect_url: string

    @Column({ nullable: true })
    merchant_webhook_url: string

    @Column()
    merchant_user_id: string

    @Column({ nullable: true })
    transak_order_id: string

    @Column()
    user_wallet_address: string

    @Column()
    isBuyOrSell: string

    @Column({ nullable: true })
    transak_key_type: string

    @Column({ nullable: true })
    transak_api_key: string

    @Column({ nullable: true })
    is_autofilluserdata: boolean

    @Column({ nullable: true })
    disableWalletAddressForm: boolean

    @Column({ nullable: true })
    order_user_email_id: string

    @Column({ nullable: true })
    user_email_id: string

    @Column({ nullable: true })
    user_first_name: string

    @Column({ nullable: true })
    user_last_name: string

    @Column({ nullable: true })
    user_mobileNumber: string

    @Column({ nullable: true })
    user_dob: string

    @Column({ nullable: true })
    user_addressLine1: string

    @Column({ nullable: true })
    user_addressLine2: string

    @Column({ nullable: true })
    user_city: string

    @Column({ nullable: true })
    user_state: string

    @Column({ nullable: true })
    user_postCode: string

    @Column({ nullable: true })
    user_countryCode: string

    @Column()
    hash: string

    @Column({ nullable: true })
    gateway_url: string

    @Column({ nullable: true })
    nivapay_hash: string

    @Column({ default: false })
    redirected: boolean

    @Column({ nullable: true })
    transak_txn_crypto_symbol: string

    @Column({ nullable: true })
    transak_txn_crypto_network: string

    @Column({ nullable: true })
    transak_txn_crypto_amount: string

    @Column({ nullable: true })
    transak_txn_hash: string

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date

}


