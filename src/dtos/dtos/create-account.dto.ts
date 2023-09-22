import { IsEnum, IsNotEmpty, IsOptional, IsString, ValidateIf } from "class-validator";

enum EntityType {
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
    @IsEnum(EntityType,{message: 'Invalid entity type'})
    entityType: string;

    @ValidateIf(data => data.entityType !== EntityType.Nivapay)
    @IsNotEmpty({message: 'Customer ID is requireed if Entity Type is not Nivapay'})
    @IsString()
    customerId: string;

    @ValidateIf(data => data.entityType !== EntityType.Nivapay && data.entityType !== EntityType.Merchant)
    @IsNotEmpty({message: 'Customer ID is requireed if Entity Type is not Nivapay'})
    @IsString()
    merchantUserId: string;
}