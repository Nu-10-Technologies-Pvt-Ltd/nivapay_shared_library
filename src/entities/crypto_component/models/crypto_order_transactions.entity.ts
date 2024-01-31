import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("crypto_order_transactions")
export class CryptoOrderTransactionsModel {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    order_id: string;

    @Column()
    transaction_id: string;

    @CreateDateColumn({ nullable: true, type: "timestamp" })
    createdAt: string;
}