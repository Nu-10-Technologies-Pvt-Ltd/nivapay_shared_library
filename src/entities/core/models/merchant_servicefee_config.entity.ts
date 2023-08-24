import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
@Entity('merchant_service_fee_configuration')
export class MerchantServiceFeeConfigurationModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    virtual_currency_config_id: string
  
    @Column()
    fee_type: string 
  
    @Column()
    fee_provider: string 
  
    @Column()
    fee_unit: string 
  
    @Column()
    fee_value: string 
  
    @Column()
    incurred_by: string //merchant,user,nivapay
  
    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @CreateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;
}