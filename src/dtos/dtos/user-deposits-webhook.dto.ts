import { IsNotEmpty } from "class-validator";

export class UserDepositsMerchantWebhookDto{
    @IsNotEmpty()
    merchant_id: string;

    @IsNotEmpty()
    type: string;

    @IsNotEmpty()
    merchant_webhook_url: string;
    
    data: UserDepositsWebhookData;
}

export class UserDepositsWebhookData{
    @IsNotEmpty()
    eventId : string;
    
    @IsNotEmpty()
    timestamp: Date;
   
    @IsNotEmpty()
    eventName: string;

    context: UserDepositsWebhookContext;
}

export class UserDepositsWebhookContext {
    @IsNotEmpty()
    orderId: string;
    
    @IsNotEmpty()
    userRef: string;
    
    @IsNotEmpty()
    merchantOrderRef: string;
    
    orderCurrencyType: string;

    orderCurrencySymbol: string;

    orderCurrencyNetwork: string;

    orderAmount: string;

    transactionId: string;

    transactionHash: string;

    virtualAssetSymbol: string;

    virtualAssetNetwork: string;

    receivedAmount: string;
    
    serviceFee: string;
    
    networkFee: string;
    
    creditedAmount: string;
}