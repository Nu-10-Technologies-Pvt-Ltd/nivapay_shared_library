
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
  walletId: string

  @Column({ nullable: true })
  wallet_type: string

  @Column({ nullable: true })
  createdAt: Date;
}
