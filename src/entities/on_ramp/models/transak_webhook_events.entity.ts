import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ramp-webhook-events')
export class RampWebHookEvent {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: true })
    order_id: string

    @Column({ nullable: true, type: "jsonb" })
    event_details: any

    @Column({nullable:true, type:'timestamptz'})
    created_at: Date
}