import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
@Entity('merchant_network_fee_configuration')
export class MerchantNetworkFeeConfigurationModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({nullable: true})
    virtual_currency_config_id: string

    @Column({nullable: true})
    smart_contract_config_id: string
  
    @Column()
    fee_type: string 
  
    @Column()
    fee_provider: string 
  
    @Column()
    fee_unit: string 
  
    @Column()
    fee_value: string
  
    @Column()
    incurred_by: string 
  
    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;
  
    @CreateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;
}