import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("nivapay-networks")
export class npvNetworks {
    @PrimaryGeneratedColumn("uuid")
    network_id: string;

    @Column()
    network: string;

    @Column({ default: false })
    supports_memo: boolean

    @Column({ type: 'boolean' })
    isTestNet: boolean

    @Column({ nullable: true })
    payUriNetwork: string

    @Column({ nullable: true })
    chainId: string //for evm network only 

    @Column()
    native_asset_id: string;

    @Column()
    rpc_url_evm: string;

    @Column()
    block_time_secs: number;

    @Column({ nullable: true })
    finality_block_confirmations_count: number;

    @Column({ nullable: true })
    transaction_out_eta_mins_1: number;

    @Column({ nullable: true })
    transaction_out_eta_mins_2: number;

    @Column({ nullable: true })
    transaction_in_eta_mins_1: number;

    @Column({ nullable: true })
    transaction_in_eta_mins_2: number;

    @Column({ nullable: true })
    transaction_in_eta_mins_3: number;

    @Column({ nullable: true })
    block_explorer_txn_url_prefix: string;

    @Column({ nullable: true })
    block_explorer_wallet_url_prefix: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @CreateDateColumn({ type: 'timestamp' })
    updatedAt: Date

}
