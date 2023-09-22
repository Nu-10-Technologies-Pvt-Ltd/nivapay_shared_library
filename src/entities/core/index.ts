import { NivapayProductModel } from './models/nivapay_product.entity';
import { NivapayCryptoCurrencyModel } from './models/nivapay_crypto_currency.entity';
import { NivapayFiatCurrencyModel } from './models/nivapay_fiat_currency.entity';
import { NivapayMerchantModel } from './models/nivapay_merchant.entity';
import { MerchantProductConfigurationModel } from './models/merchant_product_config.entity';
import { MerchantProductVirtualCurrencyConfigurationModel } from './models/merchant_product_crypto_config.entity';
import { MerchantProductFiatCurrencyConfigurationModel } from './models/merchant_product_fiat_config.entity';
import { MerchantNetworkFeeConfigurationModel } from './models/merchant_networkfee_config.entity';
import { MerchantServiceFeeConfigurationModel } from './models/merchant_servicefee_config.entity';
import { MerchantUser } from './models/merchant_user.entity';
import { NivapayHousewalletModel } from './models/nivapay_housewallet.entity';
import { Merchant_Webhook_log } from './models/callback_log.entity';
import { NivapaySdkUsersModel } from './models/nivapay_sdk_users.entity';


const Core_Entities = [
    NivapayProductModel,
    NivapayCryptoCurrencyModel,
    NivapayFiatCurrencyModel,
    NivapayHousewalletModel,
    NivapayMerchantModel,
    MerchantProductConfigurationModel,
    MerchantProductVirtualCurrencyConfigurationModel,
    MerchantProductFiatCurrencyConfigurationModel,
    MerchantNetworkFeeConfigurationModel,
    MerchantServiceFeeConfigurationModel,
    MerchantUser,
    Merchant_Webhook_log,
    NivapaySdkUsersModel
]

export {
    NivapayProductModel,
    NivapayCryptoCurrencyModel,
    NivapayFiatCurrencyModel,
    NivapayHousewalletModel,
    NivapayMerchantModel,
    MerchantProductConfigurationModel,
    MerchantProductVirtualCurrencyConfigurationModel,
    MerchantProductFiatCurrencyConfigurationModel,
    MerchantNetworkFeeConfigurationModel,
    MerchantServiceFeeConfigurationModel,
    MerchantUser,
    Merchant_Webhook_log,
    NivapaySdkUsersModel
}

export default Core_Entities