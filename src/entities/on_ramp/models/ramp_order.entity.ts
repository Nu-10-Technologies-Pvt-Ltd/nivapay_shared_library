import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ramp_order')
export class RampOrderModel {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ nullable: true, unique: true })
  id: string

  @Column()
  order_fiat_amount: string;

  @Column()
  order_fiat_symbol: string;

  @Column({ nullable: true, type: "numeric", default: 0 })
  order_crypto_amount: number

  @Column({ nullable: true, default: true })
  testnet: boolean

  @Column({ nullable: true })
  transaction_crypto__amount: string;

  @Column({ nullable: true })
  transaction_crypto_symbol: string;

  @Column({ nullable: true })
  transaction_crypto_asset: string;

  @Column({ nullable: true }) //(optional)
  transaction_hash: string

  @Column({ nullable: true })
  transaction_hash_explorer_url: string

  @Column()
  action: string;

  @Column() //onramp
  convert_to_crypto_symbol: string;

  @Column()
  convert_to_crypto_network: string;

  @Column({ nullable: true })
  user_id: string;

  @Column({ nullable: true })
  user_email_id: string;

  @Column({ nullable: true }) //(optional)
  hash: string;

  @Column({ nullable: true }) //(optional)
  user_first_name: string;

  @Column({ nullable: true }) //(optional)
  user_last_name: string;

  @Column({ nullable: true }) //(optional)
  user_mobileNumber: string;

  @Column({ nullable: true }) //(optional)
  user_dob: string;

  @Column({ nullable: true }) //(optional)
  user_addressLine1: string;

  @Column({ nullable: true }) //(optional)
  user_addressLine2: string;

  @Column({ nullable: true }) //(optional)
  user_city: string;

  @Column({ nullable: true }) //(optional)
  user_state: string;

  @Column({ nullable: true }) //(optional)
  user_postCode: string;

  @Column({ nullable: true }) //(optional)
  user_countryCode: string;

  @Column({ nullable: true }) //(optional)
  merchant_id: string;

  @Column()
  merchant_redirect_url: string;

  @Column({ nullable: true })
  merchant_webhook_url: string;

  @Column({ nullable: true })
  merchant_txn_id: string; //optional

  @Column({ nullable: true })
  merchant_user_id: string; //optional

  @Column({ nullable: true })
  order_user_email_id: string;

  @Column({ nullable: true, default: "PENDING" })
  order_status: string;

  @Column({ nullable: true })
  user_wallet_address: string;

  @Column({ nullable: true })
  nivapay_hash: string

  @Column({ nullable: true })
  merchant_name: string

  @Column({ nullable: true })
  is_autofilluserdata: string

  @Column({ nullable: true })
  disableWalletAddressForm: string

  @Column({ nullable: true })
  transak_id: string;

  @Column({ nullable: true })
  isBuyOrSell: string

  @Column({ nullable: true })
  merchant_wallet_address: string;

  @Column({ nullable: true })
  transfer_id: string;

  @Column({ nullable: true })
  order_virtual_currency_id: string;

  @Column({ nullable: true })
  ramp_order_status: string

  @Column({ nullable: true })
  transfer_order_status: string;

  @Column({ nullable: true, default: false })
  redirected: boolean

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
}