import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Merchant_Webhook_log {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    merchant_id: string;

    @Column()
    order_id: string;

    @Column()
    type: string;

    @Column('jsonb',{nullable:true})
    data: object;

    @CreateDateColumn({ type: 'timestamptz' })
    request_sent_at: Date

    @Column({nullable:true})
    response_status: number;

    @Column({nullable:true})
    response_data: string;

    @Column({ type: 'timestamptz', nullable: true })
    response_received_at: Date;

    @Column({nullable: true})
    comments: string;

    @Column({default:false})
    is_success: boolean;
}