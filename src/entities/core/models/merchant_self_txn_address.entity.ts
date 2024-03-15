import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('merchant_self_transaction_address')
export class MerchantSelfTransactionAddressModel {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    merchant_id: string;

    @Column()
    currency_id: string;

    @Column({ nullable: true })
    wallet_id: string;

    @Column({ nullable: true })
    external_wallet_address: string;

    @Column({nullable: true})
    merchant_nick_name: string;

    @Column()
    wallet_type: string;
    
    @Column({type:'boolean', default: true })
    is_enabled: boolean;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt: Date;

    @CreateDateColumn({ type: 'timestamptz' })
    updatedAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    validateWalletFields() {
        // Check for wallet type conditions
        if (this.wallet_type === "WITHDRAWAL" && (!this.external_wallet_address || this.wallet_id)) {
            throw new Error("For withdrawal type, external_wallet_address should have a value and wallet_id should be null.");
        } else if (this.wallet_type === "DEPOSIT" && (!this.wallet_id || this.external_wallet_address)) {
            throw new Error("For deposit type, wallet_id should have a value and external_wallet_address should be null.");
        }
    }
}
