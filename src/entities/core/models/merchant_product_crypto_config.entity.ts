import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('merchant_product_virtualcurrency_configuration')
export class MerchantProductVirtualCurrencyConfigurationModel {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    product_config_id: string

    @Column()
    virtual_currency_id: string
    
    @Column({type:'boolean', default: true })
    is_enabled: boolean

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date

    @CreateDateColumn({ type: 'timestamptz' })
    updatedAt: Date
}
