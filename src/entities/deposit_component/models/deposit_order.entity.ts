import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('deposit_component_order')
export class DepositComponentOrderModel{
    @PrimaryColumn()
    id: string;

    @Column({comment: 'Status of order'})
    order_status: string;

    @Column({comment: 'Account from which the amount should be debited'})
    from_account_id: string;

    @Column({comment: 'Account to which the amount should be credited'})
    to_account_id: string;

    @Column({comment: 'The currency which amount credit and debit will take place'})
    transaction_currency_id: string

    @Column({comment: 'The amount that should be credited/debited'})
    transaction_amount: string;

    @Column({comment: 'More details reflecting the reason for order status'})
    order_status_detail: string;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;
}