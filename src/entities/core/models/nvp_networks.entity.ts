import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("nivapay-networks")
export class nvpNetworks {
    @PrimaryGeneratedColumn("uuid")
    network_id: string;

    @Column()
    network: string;

    @Column({ default: false })
    supportsMemo: boolean

    @Column({ type: 'boolean' })
    isTestNet: boolean

    @Column({ nullable: true })
    payUriNetwork: string

    @Column({ nullable: true })
    chainId: string //for evm network only 

    @Column({ nullable: true })
    nativeAssetId: string;

    @Column({ nullable: true })
    rpcUrlEvm: string;

    @Column()
    blockTimeSecs: number;

    @Column({ nullable: true })
    finalityBlockConfirmationsCount: number;

    @Column({ nullable: true })
    transactionOutEtaMins1: number;

    @Column({ nullable: true })
    transactionOutEtaMins2: number;

    @Column({ nullable: true })
    transactionInEtaMins1: number;

    @Column({ nullable: true })
    transactionInEtaMins2: number;

    @Column({ nullable: true })
    transactionInEtaMins3: number;

    @Column({ nullable: true })
    blockExplorerTxnUrlPrefix: string;

    @Column({ nullable: true })
    blockExplorerWalletUrlPrefix: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date

    @CreateDateColumn({ type: 'timestamp' })
    updatedAt: Date

}
