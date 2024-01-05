import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('sc_order')
export class SCOrderModel {
    @PrimaryColumn()
    id: string;

    @Column()
    order_status: string;

    @Column()
    smart_contract_id: string;

    @Column({type: 'jsonb'})
    params: any;

    @Column()
    pay_from_wallet_id: string;

    @Column({nullable: true})
    order_status_detail: string;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;
}