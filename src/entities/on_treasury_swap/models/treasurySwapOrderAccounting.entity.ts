import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("treasurySwap-order-accounting")
export class treasurySwapOrderAccountingModal {
    @PrimaryGeneratedColumn('uuid')
    accountingEntryId: string;
    
    @Column()
    orderId: string;
    
    @Column()
    transactionId: string;
    
    @Column()
    swapInCurrencyId: string;
    
    @Column()
    swapInGrossAmount: string;
    
    @Column()
    serviceFee: string;
    
    @Column()
    swapInNetworkFeeEstimated: string;
    
    @Column()
    swapInNetAmount: string;
    
    @Column()
    swapOutCurrencyId: string;
    
    @Column()
    swapOutGrossAmount: string;
    
    @Column()
    swapOutNetworkFeeEstimated: string;
    
    @Column()
    swapOutNetAmount: string;
    
    @Column({default:0})
    swapInGrossAmount_$: number;
    
    @Column({default:0})
    serviceFee_$: number;
    
    @Column({default:0})
    swapInNetworkFeeEstimated_$: number;
    
    @Column({default:0})
    swapInNetAmount_$: number;
    
    @Column({default:0})
    swapOutGrossAmount_$: number;
    
    @Column({default:0})
    swapOutNetworkFeeEstimated_$: number;
    
    @Column({default:0})
    swapOutNetAmount_$: number;
    
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;
    
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date;
}