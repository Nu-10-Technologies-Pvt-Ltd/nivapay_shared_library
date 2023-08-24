import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('nivapay_fiat_currency')
export class NivapayFiatCurrencyModel {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string
    
    @Column()
    symbol: string

    @Column({ type: 'boolean', default: true })
    isEnabled: boolean

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date

    @CreateDateColumn({ type: 'timestamptz' })
    updatedAt: Date
}