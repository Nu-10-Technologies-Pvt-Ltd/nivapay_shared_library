import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('onramping-order-accounting')
export class OnrampOrderAccounting {
    @PrimaryGeneratedColumn("uuid")
    accountingEntryId: string;

    @Column()
    order_id: string

    @Column()
    transactionId: string

    @Column()
    fiatCurrencyId: string

    @Column({ type: "numeric" })
    grossAmountFiat: number;

    @Column({ type: "numeric" })
    transak_totalFeeFiat: number;

    @Column({ type: "numeric" })
    netAmountFiat: number;

    @Column({ type: "numeric", default: null, nullable: true })
    transak_transak_fee: number;

    @Column({ type: "numeric", default: null, nullable: true })
    transak_network_fee: number;

    @Column({ type: "numeric", default: null, nullable: true })
    transak_partner_fee: number;

    @Column()
    transak_paymentInstrument: string

    @Column()
    virtualCurrencyId: string

    @Column({ type: "numeric" })
    grossAmountVirtual: number

    @Column({ type: "numeric" })
    serviceFee: number

    @Column({ type: "numeric" })
    networkFee: number

    @Column({ type: "numeric" })
    netAmountVirtual: number

    @Column({ type: "numeric" })
    grossAmountFiat_$: number

    @Column({ type: "numeric" })
    transak_totalFeeFiat_$: number

    @Column({ type: "numeric" })
    netAmountFiat_$: number

    @Column({ type: "numeric" })
    grossAmountVirtual_$: number

    @Column({ type: "numeric" })
    netAmountVirtual_$: number

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: Date
}
