import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('nivapay_product')
export class NivapayProductModel {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    direction: string //enum => pay-in, pay-out
    
    @Column({type:'boolean', default: true })
    is_enabled: boolean

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date

    @CreateDateColumn({ type: 'timestamptz' })
    updatedAt: Date
}
