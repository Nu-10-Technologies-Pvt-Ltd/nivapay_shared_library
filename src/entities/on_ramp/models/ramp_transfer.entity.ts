import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("ramp-transfer")
export class RampTransfer {
    @PrimaryColumn()
    transfer_id: string

    @Column({ nullable: true })
    order_id: string /// ramp_order_id

    @Column({ type: "numeric", default: 0 })
    order_amount: number

    //NOTE: don't change below text format
    @Column({ nullable: true })
    ramptransactionHash: string

    @Column({ nullable: true, default: "TRANSFERRING" })
    order_status: string

    @Column({ nullable: true })
    transaction_time: string

    @Column()
    merchant_id: string

    @Column()
    symbol: string

    @Column({ type: "numeric", nullable: true })
    transaction_amount: number

    @Column({ type: "numeric", nullable: true })
    network_fee_in_crypto: number

    @Column({ type: "numeric", nullable: true })
    service_fee_in_crypto: number

    @Column()
    network: string

    @Column()
    fromAddress: string

    @Column()
    toAddress: string

    @Column({ nullable: true, default: 'user-deposit' }) //  merchant deposit or user deposit 
    transaction_type: string

    @CreateDateColumn({ type: "timestamptz" })
    createdAt: Date
}