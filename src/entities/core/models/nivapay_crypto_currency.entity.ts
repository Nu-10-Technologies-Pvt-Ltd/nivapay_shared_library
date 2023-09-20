import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('nivapay_crypto_currency')
export class NivapayCryptoCurrencyModel {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column()
  symbol: string

  @Column()
  network: string

  @Column({ type: 'boolean' })
  isTestNet: boolean

  @Column({ type: 'boolean', default: true })
  isEnabled: boolean

  @Column({ default: 0 })
  decimal_digits: Number

  @Column({ default: 0 })
  incoming_detecting_eta_mins: Number

  @Column({ nullable: true, default: false })
  IsERC20Token: boolean

  @Column({ nullable: true })
  payUriNetwork: string

  nativeCurrencySymbol: ""

  @Column({ nullable: true })
  chainId: string //for evm network only

  @Column({ nullable: true })
  contractAddress: string;

  @Column({ nullable: true })
  contractDecimals: number;

  @Column({ nullable: true })
  decimal_digits_custom: number;

  @Column({ nullable: true })
  icon_url: string;

  @Column({ nullable: true })
  token_standard: string;

  @Column({ nullable: true })
  is_native: boolean

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @CreateDateColumn({ type: 'timestamp' })
  updatedAt: Date

}
