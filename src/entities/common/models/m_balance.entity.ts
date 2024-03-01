import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
@Unique(['accountId', 'currencyId'])
export class M_Balance {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    accountId: string;

    @Column({ nullable: true })
    currencyId: string;

    @Column({ default: '0' })
    balance: string;

    @Column({ default: '0' })
    balance_$: string;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updated_at: Date

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date
}