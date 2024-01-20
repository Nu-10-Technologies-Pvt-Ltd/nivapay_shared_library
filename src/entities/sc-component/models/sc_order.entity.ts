import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('sc_order')
export class ScOrderModel {
    @PrimaryColumn()
    id: string;

    @Column()
    order_status: string;

    @Column()
    smart_contract_id: string;

    @Column({type: 'jsonb'})
    functional_args: any;

    @Column()
    pay_from_wallet_id: string;

    @Column()
    amount: string;

    @Column({nullable: true})
    amount_payable_to_sc: string;

    @Column({nullable: true})
    custom_gas_price: string;

    @Column({nullable: true})
    custom_gas_limit: string;

    @Column({nullable: true})
    order_status_detail: string;

    @Column({nullable: true})
    error_details: any;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;
}