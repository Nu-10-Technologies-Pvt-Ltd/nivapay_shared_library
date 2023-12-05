import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('dw_order')
export class DwComponentOrderModel {
    @PrimaryColumn({ comment: "Order Id" })
    id: string;

    @Column({ comment: 'Status of order' })
    order_status: string;

    @Column({ nullable: true, comment: 'Wallet from which the amount should be debited' })
    from_wallet_id: string;

    @Column({ nullable: true, comment: 'Wallet to which the amount should be credited' })
    to_wallet_id: string;

    @Column({ nullable: true, comment: 'Account from which the amount should be debited' })
    from_account_id: string;

    @Column({ nullable: true, comment: 'Account to which the amount should be credited' })
    to_account_id: string;

    @Column({ comment: 'The currency which amount credit and debit will take place' })
    transaction_currency_id: string

    @Column({ comment: 'The amount that should be credited/debited' })
    transaction_amount: string;

    @Column({ nullable: true, comment: 'More details reflecting the reason for order status' })
    order_status_detail: string;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;
}