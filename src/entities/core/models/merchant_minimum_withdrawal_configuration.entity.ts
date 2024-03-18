import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
@Entity('merchant_minimum_withdrawal_configuration')
export class MerchantMinimumWithdrawalConfigurationModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({nullable: true})
    virtual_currency_config_id: string
  
    @Column()
    fee_unit: string 
  
    @Column()
    fee_value: string 
  
    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @CreateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;
}