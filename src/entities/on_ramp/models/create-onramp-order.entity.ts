/* eslint-disable prettier/prettier */
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('onramp-order')
export class onRampOrder {
    @PrimaryColumn()
    id: string; // on ramp order id   :string

    @Column({ default: 'PENDING' })
    order_status: string;

    @Column()
    order_fiat_amount: string;

    @Column()
    order_fiat_symbol: string;

    @Column()
    fiat_currency_id: string;

    @Column()
    order_fiat_name: string;

    @Column()
    convert_to_crypto_network: string;

    @Column()
    convert_to_crypto_symbol: string;

    @Column()
    convert_to_crypto_contractAddress: string;

    @Column()
    convertToCryptoName: string;

    @Column()
    convertToVirtualCurrencyId: string;

    @Column({ nullable: true })
    transak_crypto_symbol: string;

    @Column({ nullable: true })
    transak_crypto_network: string;

    @Column()
    merchant_id: string;

    @Column()
    merchant_brand_name: string;

    @Column({ nullable: true })
    transak_order_id: string;

    @Column()
    user_wallet_address: string;

    @Column()
    merchant_user_id: string

    @Column()
    isBuyOrSell: string;

    @Column({ nullable: true })
    transak_key_type: string;

    @Column({ nullable: true })
    transak_api_key: string;

    @Column({ nullable: true })
    is_autofilluserdata: boolean;

    @Column({ nullable: true })
    disableWalletAddressForm: boolean;

    @Column({ nullable: true })
    user_email_id: string;

    @Column({ nullable: true })
    user_first_name: string;

    @Column({ nullable: true })
    user_last_name: string;

    @Column({ nullable: true })
    user_mobileNumber: string;

    @Column({ nullable: true })
    user_dob: string;

    @Column({ nullable: true })
    user_addressLine1: string;

    @Column({ nullable: true })
    user_addressLine2: string;

    @Column({ nullable: true })
    user_city: string;

    @Column({ nullable: true })
    user_state: string;

    @Column({ nullable: true })
    user_postCode: string;

    @Column({ nullable: true })
    user_countryCode: string;

    @Column({ nullable: true })
    transak_txn_crypto_symbol: string;

    @Column({ nullable: true })
    transak_txn_crypto_network: string;

    @Column({ nullable: true })
    transak_txn_crypto_amount: string;

    @Column({ nullable: true })
    transak_txn_hash: string;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
}
