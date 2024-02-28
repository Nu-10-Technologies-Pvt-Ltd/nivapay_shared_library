import { IsEmpty, IsNotEmpty } from "class-validator";

export class OnRampMerchantWebhookDto{
    @IsNotEmpty()
    merchant_id: string;

    @IsNotEmpty()
    type: string;

    @IsEmpty()
    status: string;
    
    @IsEmpty()
    status_reason: string;

    @IsNotEmpty()
    merchant_webhook_url: string;
    
    data: OnRampWebhookData;
}

export class OnRampWebhookData{
    @IsNotEmpty()
    eventId : string;
    
    @IsNotEmpty()
    timestamp: Date;
   
    @IsNotEmpty()
    eventName: string;

    context: OnRampWebhookContext;
}

export class OnRampWebhookContext {
    @IsNotEmpty()
    orderId: string;
    
    @IsNotEmpty()
    userRef: string;
    
    @IsNotEmpty()
    merchantOrderRef: string;
    
    @IsNotEmpty()
    fiatSymbol: string;

    @IsNotEmpty()
    fiatAmount: string;

    @IsNotEmpty()
    virtualAssetSymbol: string;

    @IsNotEmpty()
    virtualAssetNetwork: string;

    virtualAssetAmount: string;

    depositAmount: string;

    serviceFee: string;

    networkFee: string;

    creditedAmount: string;

    @IsEmpty()
    status: string;
    
    @IsEmpty()
    status_reason: string;
}