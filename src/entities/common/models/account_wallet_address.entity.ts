import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("account-wallet-addresses")
export class AccountWalletAddress {
    @PrimaryGeneratedColumn("uuid")
    walletId: string;

    @Column()
    address: string;

    @Column()
    currencyId: string;

    @Column()
    walletName: string;

    @Column()
    accountId: string;

    @Column()
    addressType: string;

    @Column()
    contractOwnerAddress: string;

    @Column()
    directionToWatch: string;

    @Column()
    usageFrequency: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column() // in order to avoid the date mismatch will make the date type as string and store that 
    expiryAt: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    lastCheckedAt: string
}