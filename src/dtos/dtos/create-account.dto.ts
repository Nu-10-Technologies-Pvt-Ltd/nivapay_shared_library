import { IsEnum, IsNotEmpty, IsOptional, IsString, ValidateIf } from "class-validator";

export enum AccountsEntityType {
    Nivapay = 'nivapay',
    Merchant = 'merchant',
    MerchantUser = 'merchant-user',
    User = 'user',
}

export class CreateAccountDTO{
    @IsOptional()
    @IsString()
    accountName: string;

    @IsNotEmpty()
    @IsString()
    @IsEnum(AccountsEntityType,{message: 'Invalid entity type'})
    entityType: string;

    @ValidateIf(data => data.entityType !== AccountsEntityType.Nivapay)
    @IsNotEmpty({message: 'Customer ID is requireed if Entity Type is not Nivapay'})
    @IsString()
    customerId: string;

    @ValidateIf(data => data.entityType !== AccountsEntityType.Nivapay && data.entityType !== AccountsEntityType.Merchant)
    @IsNotEmpty({message: 'Customer ID is requireed if Entity Type is not Nivapay'})
    @IsString()
    merchantUserId: string;
}