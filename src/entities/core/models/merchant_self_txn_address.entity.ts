import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('merchant_self_transaction_address')
export class MerchantProductConfigurationModel {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    merchant_id: string

    @Column()
    currency_id: string

    @Column()
    wallet_id: string

    @Column({nullable: true})
    merchant_nick_name: string
    
    @Column({type:'boolean', default: true })
    is_enabled: boolean

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date

    @CreateDateColumn({ type: 'timestamptz' })
    updatedAt: Date
}
