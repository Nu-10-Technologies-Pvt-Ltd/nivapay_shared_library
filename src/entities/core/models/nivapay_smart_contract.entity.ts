import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('nivapay_smart_contract')
export class NivapaySmartContractModel {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({comment: "Address of smart contract"})
    sc_address: string;

    @Column({comment: "Nivapay network id"})
    network_id: string;

    @Column({comment: "Name of the smart contract method"})
    method_name: string;

    @Column({comment: "Signature of the smart contract method"})
    method_signature: string;

    @Column({type: 'jsonb', comment: "ABI (Application Binary Interface) definition for the smart contract method"})
    method_ABI: any;

    @Column({comment: "Maximum amount of gas allowed for executing the smart contract method"})
    gas_limit: string;

    @Column({comment: "Enable status in Nivapay for this contract"})
    isEnabled: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updatedAt: Date
}