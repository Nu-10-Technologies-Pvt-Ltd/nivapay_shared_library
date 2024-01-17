import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("sc-order-accounting")
export class ScOrderAccountingModal {
    @PrimaryGeneratedColumn('uuid')
    accountingEntryId: string;
    
    @Column({comment: "Order ID for which accounting entry is being maintained"})
    orderId: string;
    
    @Column({comment: "Onchain transaction id"})
    transactionId: string;
    
    @Column({comment: "ID of virtual currency which will be paid to the SC function"})
    payableCurrencyId: string;
    
    @Column({comment: "Amount in payableCurrencyId units paid by the user"})
    grossAmount: string;
    
    @Column({comment: "Service Fee applicable on grossAmount"})
    serviceFee: string;
    
    @Column({comment: "Estimated network fee to be sent along with this on-chain transaction"})
    networkFeeEstimated: string;

    @Column({comment: "ID of virtual currency in which network fee is charged"})
    networkFeeCurrencyId: string;
    
    @Column({comment: "Net amount to be paid to the SC function"})
    netAmount: string;
    
    @Column({type:'numeric', default:0, nullable: true})
    grossAmountt_$: number;
    
    @Column({type:'numeric', default:0, nullable: true})
    serviceFee_$: number;
    
    @Column({type:'numeric', default:0, nullable: true})
    networkFeeEstimated_$: number;
    
    @Column({type:'numeric', default:0, nullable: true})
    netAmount_$: number;
    
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
}