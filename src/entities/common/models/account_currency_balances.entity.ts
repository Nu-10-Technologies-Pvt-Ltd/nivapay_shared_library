import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("account-currency-balances")
export class AccountCurrencyBalances {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    accountId: string;

    @Column()
    currencyId: string;

    @Column({ default: '0' })
    balance: string;

    @Column({ default: '0' })
    balance_$: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updatedAt: Date;
}