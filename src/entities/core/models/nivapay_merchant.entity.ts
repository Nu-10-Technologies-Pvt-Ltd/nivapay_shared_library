import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('nivapay_merchant')
export class NivapayMerchantModel {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ unique: true, nullable: true })
  id: string

  @Column({ nullable: true })
  api_key: string

  @Column({ nullable: true })
  merchant_brand_name: string

  @Column({ nullable: true })
  merchant_legal_name: string

  @Column({ nullable: true })
  webhook_url: string;

  @Column({ nullable: true , unique: true })
  registered_email_id: string

  @Column({ nullable: true })
  password: string

  @Column({ default: false })
  is_m_dashboard: boolean

  @Column({ nullable: true })
  is_demo: boolean

  @Column({ nullable: true })
  account_id: string

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
}

// TODO: enum for
// orderType . etc wherever applicable.

// export interface Product_fiat_coins_enabled {

//   product_id: string
//   fiat_coin_id: string
// }


// export interface Product_crypto_coins_enabled {

//   product_id: string
//   crypto_coin_id: string
// }

