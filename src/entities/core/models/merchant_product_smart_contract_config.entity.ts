import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('merchant_product_smartcontract_configuration')
export class MerchantProductSmartContractConfigurationModel {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    product_config_id: string

    @Column()
    smart_contract_id: string
    
    @Column({type:'boolean', default: true })
    is_enabled: boolean

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date

    @CreateDateColumn({ type: 'timestamptz' })
    updatedAt: Date
}
