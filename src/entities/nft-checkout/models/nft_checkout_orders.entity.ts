/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity("nft-checkout-orders")
export class NftCheckoutOrdersModel {
    
    @PrimaryColumn()
    order_id: string;

    @Column()
    on_ramp_order_id: string;

    @Column({nullable:true})
    on_ramp_order_status: string;

    @Column({nullable:true})
    sc_order_id: string;

    @Column({nullable:true})
    sc_order_status: string;

    @Column()
    hash: string;

    @Column()
    order_fiat_amount: string;

    @Column()
    order_fiat_symbol:string;

    @Column()
    smartContractFunctionId: string;

    @Column({type: 'jsonb', comment: "ABI (Application Binary Interface) definition for the smart contract method"})
    function_args: any;
    
    @Column()
    payableCryptoSymbol:string;

    @Column()
    payableCryptoContractAddress:string;

    @Column()
    totalValue:string;

    @Column()
    networkName:string;

    @Column()
    customGasLimit:number;

    @Column()
    order_status:string

    @Column()
    merchant_id:string

    @Column({type: "timestamp"})
    order_expiry:Date

    @Column({nullable:true})
    merchant_txn_id: string;

    @Column()
    merchant_redirect_url: string;

    @Column({nullable:true})
    merchant_webhook_url: string;

    @Column()
    merchant_user_id:string

    @Column({nullable:true})
    user_email_id:string

    @Column({nullable:true})
    user_first_name:string

    @Column({nullable:true})
    user_last_name:string

    @Column({type:"bigint",nullable:true})
    user_mobileNumber:number

    @Column({nullable:true})
    user_dob:Date

    @Column({type:"text",nullable:true})
    user_addressLine1:string

    @Column({type:"text",nullable:true})
    user_addressLine2:string

    @Column({nullable:true})
    user_city:string

    @Column({nullable:true})
    user_state:string

    @Column({nullable:true})
    user_postCode:string

    @Column({nullable:true})
    user_countryCode:string

    @Column({type:"boolean",default:false})
    redirected:boolean

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updatedAt: Date
}