import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("deposit_component_order_accounting")
export class DepositComponentOrderAccountingModel {
    @PrimaryGeneratedColumn('uuid')
    accountingEntryId: string;
    
    @Column()
    orderId: string;
    
    @Column()
    transactionId: string;

    @Column()
    coin_type: string;

    @Column()
    coin_id: string;
    
    @Column({ type: "numeric", default: 0 })
    grossAmount: number;
    
    @Column({ type: "numeric", default: 0 })
    serviceFeeByMerchant: number;
    
    @Column({ type: "numeric", default: 0 })
    serviceFeeByUser: number;
    
    @Column({ type: "numeric", default: 0 })
    estimatedNetworkFeeByMerchant: number;
    
    @Column({ type: "numeric", default: 0, nullable: true })
    actualNetworkFeeByUser: number;
    
    @Column({ type: "numeric", default: 0, nullable: true })
    estimatedNetworkFeeByUser: number;
    
    @Column({ type: "numeric", default: 0 })
    netAmount: number;
    
    @Column({ type: "numeric", default: 0 })
    new_incoming_balance: number;
    
    @Column({ type: "numeric", default: 0 })
    new_outgoing_balance: number
    
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
}