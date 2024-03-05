import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Accounts {
    @PrimaryGeneratedColumn('uuid')
    accountId: string;

    @Column({ nullable: true })
    accountName: string;

    @Column()
    entityType: string;

    @Column({ nullable: true })
    customerId: string;

    @Column({ nullable: true })
    merchantUserId: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;
}