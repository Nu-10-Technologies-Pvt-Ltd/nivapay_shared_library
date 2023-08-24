import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
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

//   // id from products table
//   @Column({ type: 'simple-array', nullable: true })
//   products_enabled: string[]


//   // id from coins table
//   @Column({ type: 'simple-array', nullable: true })
//   product_crypto_coins_enabled: string[]


//   // id from coins table
//   @Column({ type: 'simple-array', nullable: true })
//   product_fiat_coins_enabled: string[]

//   // id from commercial config table => combo of coin + product + fee(user/merchant/nivapay)
//   @Column({ type: 'simple-array', nullable: true })
//   commercial_configs: string[]


//   // id from network fee config table => combo of coin + product + fee(user/merchant/nivapay)
//   @Column({ type: 'simple-array', nullable: true })
//   network_fee_configs: string[]

  @Column({nullable: true})
  webhook_url: string;

  @Column({ nullable: true })
  registered_email_id: string

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

