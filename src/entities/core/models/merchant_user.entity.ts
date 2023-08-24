import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class MerchantUser {
    @PrimaryGeneratedColumn("uuid")
    user_id: string

    @Column()
    merchant_id: string

    @Column()
    username: string

    @Column()
    password: string

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date
}
