import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("dw_transactions")
export class DwComponentTransactionsModel {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({comment: "Dw component order id"})
    order_id: string

    @Column()
    transactionHash: string;

    @Column({nullable: true})
    order_type: string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date
}