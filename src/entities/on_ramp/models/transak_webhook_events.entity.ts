import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('transak-webhook-events')
export class TransakWebHookEvent {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: true })
    order_id: string

    @Column({ nullable: true, type: "jsonb" })
    event_details: any

    @Column({nullable:true, type:'timestamptz'})
    created_at: Date
}