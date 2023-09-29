import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("account-wallet-addresses")
export class AccountWalletAddress {
    @PrimaryGeneratedColumn("uuid")
    walletId: string;

    @Column()
    address: string;

    @Column()
    currencyId: string;

    @Column({ nullable: true })
    walletName: string;

    @Column()
    accountId: string;

    @Column({ nullable: true })
    addressType: string;

    @Column({ nullable: true })
    contractOwnerAddress: string;

    @Column()
    directionToWatch: string;

    @Column()
    usageFrequency: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column({ nullable: true }) // in order to avoid the date mismatch will make the date type as string and store that 
    expiryAt: string;

    @Column({ nullable: true })
    lastCheckedAt: string
}