import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("onramp-to-treasury-swap-order")
export class onrampTreasureSwapOrder {
    @PrimaryColumn()
    swap_id: string;

    @Column()
    id: string; // on ramp order id   :string

    @Column()
    onramp_order_status: string

    @Column()
    swap_order_status: string

    @Column()
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

    @Column()
    convert_to_crypto_contractAddress: string

    @Column()
    convertToVirtualCurrencyId: string

    @Column()
    convertToCryptoName: string

    @Column()
    conversionRoute: string

    @Column()
    transfer_to_wallet_address: string

    @Column()
    onrampVirtualCurrencyId: string

    @Column()
    transak_crypto_symbol: string

    @Column()
    transak_crypto_network: string

    @Column()
    merchant_id: string

    @Column()
    merchant_brand_name: string

    @Column()
    merchant_txn_id: string

    @Column()
    merchant_redirect_url: string

    @Column()
    merchant_webhook_url: string

    @Column()
    merchant_user_id: string

    @Column()
    transak_order_id: string

    @Column()
    user_wallet_address: string

    @Column()
    isBuyOrSell: string

    @Column()
    transak_key_type: string

    @Column()
    transak_api_key: string

    @Column()
    is_autofilluserdata: boolean

    @Column()
    disableWalletAddressForm: boolean

    @Column()
    order_user_email_id: string

    @Column()
    user_email_id: string

    @Column()
    user_first_name: string

    @Column()
    user_last_name: string

    @Column()
    user_mobileNumber: string

    @Column()
    user_dob: string

    @Column()
    user_addressLine1: string

    @Column()
    user_addressLine2: string

    @Column()
    user_city: string

    @Column()
    user_state: string

    @Column()
    user_postCode: string

    @Column()
    user_countryCode: string

    @Column()
    hash: string

    @Column()
    gateway_url: string

    @Column()
    nivapay_hash: string

    @Column()
    redirected: boolean

    @Column()
    transak_txn_crypto_symbol: string

    @Column()
    transak_txn_crypto_network: string

    @Column()
    transak_txn_crypto_amount: string

    @Column()
    order_virtual_currency_id: string

    @Column()
    product_id: string

    @Column()
    transak_txn_hash: string

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date

}


