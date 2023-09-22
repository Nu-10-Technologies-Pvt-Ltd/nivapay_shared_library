import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Accounts{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: true})
    accountName: string;

    @Column()
    entityType: string;

    @Column({nullable: true})
    customerId: string;

    @Column({nullable: true})
    merchantUserId: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    created_at: Date;
}