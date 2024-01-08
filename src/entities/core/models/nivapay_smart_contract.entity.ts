import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('nivapay_smart_contract')
export class NivapaySmartContractModel {
    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @Column({comment: "Smart Contract id"})
    id: string;

    @Column({comment: "A name to identify this contract"})
    sc_display_name: string;

    @Column({comment: "Action done by the smart contract"})
    sc_action: string;

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
    
    @Column({nullable: true})
    method_definition: string;

    @Column({comment: "Maximum amount of gas allowed for executing the smart contract method"})
    gas_limit: string;

    @Column({nullable: true, comment: "Name of parameter in ABI which indicates the total number of NFT's to be issued"})
    sc_FunctionTokenCountParam: string;

    @Column({default: false, comment: "Is payment required to execute this smart contract"})
    is_payment_required: boolean;

    @Column({nullable: true, comment: "Nivapay crypto currency id, In which payment to be made to execute the smart contract"})
    payable_crypto_currency_id: string;

    @Column({nullable: true, comment: "Name of the token, If a token is being issued by this contract method"})
    issueTokenName: string;

    @Column({nullable: true, comment: "Symbol of the token, If a token is being issued by this contract method"})
    issueTokenSymbol: string;

    @Column({comment: "Enable status in Nivapay for this contract"})
    isEnabled: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updatedAt: Date
}