import { IsString } from "class-validator";

export class InvokeSmartContractDto{
    @IsString()
    nivapay_network_id: string;

    contractAddress: string;

    methodName: string;

    methodABI: any;

    params: any;

    fromWalletId: string;
}