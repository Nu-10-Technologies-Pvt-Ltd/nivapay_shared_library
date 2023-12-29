import { IsString } from "class-validator";

export class CreateWalletEntry{
    @IsString()
    address: string;

    @IsString()
    currencyId: string;
    
    @IsString()
    walletName: string;
    
    @IsString()
    accountId: string;
    
    @IsString()
    addressType: string;
    
    @IsString()
    contractOwnerAddress: string;
    
    @IsString()
    directionToWatch: string;
    
    @IsString()
    usageFrequency: string;

    expiryAt: any;
}