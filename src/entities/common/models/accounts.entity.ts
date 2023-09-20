import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("accounts")
export class accounts {
    @PrimaryGeneratedColumn("uuid")
    accountId: string;

    @Column()
    accountName: string;

    @Column()
    entityType: string; // NVP=> merchant, merchant-user, user

    @Column()
    customerID: string;

    @Column({ nullable: true })
    merchantUserId: string;

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
}