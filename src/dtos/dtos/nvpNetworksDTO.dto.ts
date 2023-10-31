import { IsString, IsBoolean, IsNumber, IsDefined, IsNotEmpty, IsOptional } from 'class-validator';

export class nvpNetworksDTO {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    network: string;

    @IsBoolean()
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
    @IsOptional()
    chainId: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    nativeAssetId: string;

    @IsString()
    @IsOptional()
    rpcUrlEvm: string;

    @IsNumber()
    @IsOptional()
    blockTimeSecs: number;

    @IsNumber()
    @IsOptional()
    finalityBlockConfirmationsCount: number;

    @IsNumber()
    @IsOptional()
    transactionOutEtaMins1: number;

    @IsNumber()
    @IsOptional()
    transactionOutEtaMins2: number;

    @IsOptional()
    @IsNumber()
    transactionInEtaMins1: number;

    @IsOptional()
    @IsNumber()
    transactionInEtaMins2: number;

    @IsOptional()
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
