import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("deposit_component_order_accounting")
export class DepositComponentOrderAccountingModel {
    @PrimaryGeneratedColumn('uuid')
    accountingEntryId: string;
    
    @Column()
    order_id: string;
    
    @Column({comment: "TransactionId from the on/off chain transactions table"})
    transaction_id: string;

    @Column({default: "virtual", comment: "Type of currency virtual/fiat"})
    currency_type: string;

    @Column({comment: "The detected transaction corresponds to which currency"})
    currency_id: string;
    
    @Column({ type: "numeric", default: 0, comment: "Gross amount which was received after deducting the applicable fee" })
    gross_amount: number;
    
    @Column({ type: "numeric", default: 0, comment: "Service fee incurred by merchant" })
    serviceFeeByMerchant: number;
    
    @Column({ type: "numeric", default: 0, comment: "Service fee incurred by user" })
    serviceFeeByUser: number;
    
    @Column({ type: "numeric", default: 0, comment: "Estimated network fee incurred by merchant for this transaction" })
    estimatedNetworkFeeByMerchant: number;
    
    @Column({ type: "numeric", default: 0, nullable: true, comment: "Network fee incurred by user" })
    actualNetworkFeeByUser: number;
    
    @Column({ type: "numeric", default: 0, nullable: true, comment: "Estimated network fee incurred by user for this transaction" })
    estimatedNetworkFeeByUser: number;
    
    @Column({ type: "numeric", default: 0, comment: "Net amount which was received after deducting the applicable fee" })
    netAmount: number;
    
    @Column({ type: "numeric", default: 0 })
    new_incoming_balance: number;
    
    @Column({ type: "numeric", default: 0 })
    new_outgoing_balance: number
    
    @Column({ type: "numeric", default: 0 })
    new_incoming_balance_$: number;
    
    @Column({ type: "numeric", default: 0 })
    new_outgoing_balance_$: number
    
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
}