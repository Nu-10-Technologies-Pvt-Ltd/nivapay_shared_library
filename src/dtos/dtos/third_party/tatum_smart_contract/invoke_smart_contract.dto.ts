import { IsString } from "class-validator";

export class InvokeSmartContractDto{
    @IsString()
    nivapay_network_id: string;

    data: InvokeSmartContractData
}

export class InvokeSmartContractData{
    contractAddress: string;
    methodName: string;
    methodABI: any;
    params: any;
    fromPrivateKey: string;
}