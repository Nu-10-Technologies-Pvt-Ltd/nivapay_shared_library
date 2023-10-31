import { IsString, IsBoolean, IsNumber, IsDefined, IsNotEmpty } from 'class-validator';

export class npvNetworksDTO {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    network: string;

    @IsBoolean()
    @IsDefined()
    @IsNotEmpty()
    supportsMemo: boolean;

    @IsBoolean()
    @IsDefined()
    @IsNotEmpty()
    isTestNet: boolean;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    payUriNetwork: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    chainId: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    nativeAssetId: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    rpcUrlEvm: string;

    @IsNumber()
    blockTimeSecs: number;

    @IsNumber()
    finalityBlockConfirmationsCount: number;

    @IsNumber()
    transactionOutEtaMins1: number;

    @IsNumber()
    transactionOutEtaMins2: number;

    @IsNumber()
    transactionInEtaMins1: number;

    @IsNumber()
    transactionInEtaMins2: number;

    @IsNumber()
    transactionInEtaMins3: number;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    blockExplorerTxnUrlPrefix: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    blockExplorerWalletUrlPrefix: string;

}
