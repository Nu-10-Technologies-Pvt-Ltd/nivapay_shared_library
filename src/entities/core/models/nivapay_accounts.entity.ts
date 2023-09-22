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

    @CreateDateColumn({ type: 'timestamptz' })
    created_at: Date;
}