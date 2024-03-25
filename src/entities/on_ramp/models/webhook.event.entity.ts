import { Column, Entity, PrimaryGeneratedColumn , CreateDateColumn} from "typeorm";


@Entity('ramp-webhook-events')
export class RampWebHookEvent {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: true })
    order_id: string

    @Column({ nullable: true, type: "jsonb" })
    event_details: any

    @CreateDateColumn({ nullable: true, type: 'timestamp' })
    created_at: Date

}