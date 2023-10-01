import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Accounts_Accounting{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    accountId: string;

    @Column({nullable: true})
    orderId: string;

    @Column()
    transactionId: string;

    @Column()
    currencyId: string;

    @Column()
    balanceBefore: string;

    @Column()
    credit: string;

    @Column()
    debit: string;

    @Column()
    balanceAfter: string;

    @Column({nullable: true})
    balanceBefore_$: string;

    @Column({nullable: true})
    credit_$: string;

    @Column({nullable: true})
    debit_$: string;

    @Column({nullable: true})
    balanceAfter_$: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;
}