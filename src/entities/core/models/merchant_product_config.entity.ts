import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('merchant_product_configuration')
export class MerchantProductConfigurationModel {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    merchant_id: string

    @Column()
    product_id: string
    
    @Column({type:'boolean', default: true })
    is_enabled: boolean

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date

    @CreateDateColumn({ type: 'timestamptz' })
    updatedAt: Date
}
