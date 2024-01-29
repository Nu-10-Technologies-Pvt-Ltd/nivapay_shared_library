import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('crypto-order-accounting')
export class CryptoOrderAccountingModel {
    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @Column()
    order_id: string;
    
    @Column({ unique: true })
    transactionId: string
    
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
    
    @CreateDateColumn({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
    createdAt: string
}