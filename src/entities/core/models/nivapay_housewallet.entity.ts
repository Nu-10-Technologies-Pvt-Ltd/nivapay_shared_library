
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('nivapay_house_wallet')
export class NivapayHousewalletModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  userId: string // admin-users . who created. etc.

  @Column({ nullable: true })
  walletAddress: string

  @Column({ nullable: true })
  env: string

  @Column({ nullable: true })
  network: string

  @Column({ nullable: true })
  crypto: string

  @Column({ nullable: true })
  testnet: boolean

  @Column({ nullable: true })
  type: string // reserve // gas-station etc

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
}
