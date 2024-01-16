import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("nft-checkout-user-events")
export class NftCheckoutUserEventsModel {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    order_id: string;

    @Column()
    event_name: string;

    @Column()
    provider: string;

    @Column({ nullable: true })
    message: string;

    @Column({ type: 'timestamptz' })
    timestamp: Date
}