import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('swap_order')
export class SwapOrderModel {
    @PrimaryColumn()
    id: string;

    @Column()
    order_status: string;

    @Column()
    swap_in_currency_id: string;

    @Column()
    swap_in_wallet_id: string;

    @Column()
    swap_in_amount: string;

    @Column()
    swap_out_currency_id: string;

    @Column()
    swap_out_wallet_address: string;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;
}