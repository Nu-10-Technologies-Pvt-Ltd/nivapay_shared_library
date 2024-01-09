import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("sc-order-accounting")
export class ScOrderAccountingModal {
    @PrimaryGeneratedColumn('uuid')
    accountingEntryId: string;
    
    @Column()
    orderId: string;
    
    @Column()
    transactionId: string;
    
    @Column()
    paymentCurrencyId: string;
    
    @Column()
    paymentAmount: string;
    
    @Column()
    serviceFee: string;
    
    @Column()
    networkFee: string;

    @Column()
    networkFeeCurrencyId: string;
    
    @Column()
    netAmount: string;
    
    @Column({type:'numeric', default:0, nullable: true})
    paymentAmount_$: number;
    
    @Column({type:'numeric', default:0, nullable: true})
    serviceFee_$: number;
    
    @Column({type:'numeric', default:0, nullable: true})
    networkFeeEstimated_$: number;
    
    @Column({type:'numeric', default:0, nullable: true})
    netAmount_$: number;
    
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
}