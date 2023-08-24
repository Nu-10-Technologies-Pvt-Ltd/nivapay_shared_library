import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("deposit-user-events")
export class DepositUserEvents {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    order_id: string;

    @Column()
    user_event: string;

    @Column({nullable: true})
    asset_network: string;

    @Column({nullable: true})
    asset_symbol: string;

    @Column({nullable: true})
    asset_amount: string;

    @Column()
    session_time_left_seconds: number;

    @Column({ type: 'timestamptz' })
    event_time: string;
}