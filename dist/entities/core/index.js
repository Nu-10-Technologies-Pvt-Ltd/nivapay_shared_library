"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NivapaySdkUsersModel = exports.Merchant_Webhook_log = exports.MerchantUser = exports.MerchantServiceFeeConfigurationModel = exports.MerchantNetworkFeeConfigurationModel = exports.MerchantProductFiatCurrencyConfigurationModel = exports.MerchantProductVirtualCurrencyConfigurationModel = exports.MerchantProductConfigurationModel = exports.NivapayMerchantModel = exports.NivapayHousewalletModel = exports.NivapayFiatCurrencyModel = exports.NivapayCryptoCurrencyModel = exports.NivapayProductModel = void 0;
const nivapay_product_entity_1 = require("./models/nivapay_product.entity");
Object.defineProperty(exports, "NivapayProductModel", { enumerable: true, get: function () { return nivapay_product_entity_1.NivapayProductModel; } });
const nivapay_crypto_currency_entity_1 = require("./models/nivapay_crypto_currency.entity");
Object.defineProperty(exports, "NivapayCryptoCurrencyModel", { enumerable: true, get: function () { return nivapay_crypto_currency_entity_1.NivapayCryptoCurrencyModel; } });
const nivapay_fiat_currency_entity_1 = require("./models/nivapay_fiat_currency.entity");
Object.defineProperty(exports, "NivapayFiatCurrencyModel", { enumerable: true, get: function () { return nivapay_fiat_currency_entity_1.NivapayFiatCurrencyModel; } });
const nivapay_merchant_entity_1 = require("./models/nivapay_merchant.entity");
Object.defineProperty(exports, "NivapayMerchantModel", { enumerable: true, get: function () { return nivapay_merchant_entity_1.NivapayMerchantModel; } });
const merchant_product_config_entity_1 = require("./models/merchant_product_config.entity");
Object.defineProperty(exports, "MerchantProductConfigurationModel", { enumerable: true, get: function () { return merchant_product_config_entity_1.MerchantProductConfigurationModel; } });
const merchant_product_crypto_config_entity_1 = require("./models/merchant_product_crypto_config.entity");
Object.defineProperty(exports, "MerchantProductVirtualCurrencyConfigurationModel", { enumerable: true, get: function () { return merchant_product_crypto_config_entity_1.MerchantProductVirtualCurrencyConfigurationModel; } });
const merchant_product_fiat_config_entity_1 = require("./models/merchant_product_fiat_config.entity");
Object.defineProperty(exports, "MerchantProductFiatCurrencyConfigurationModel", { enumerable: true, get: function () { return merchant_product_fiat_config_entity_1.MerchantProductFiatCurrencyConfigurationModel; } });
const merchant_networkfee_config_entity_1 = require("./models/merchant_networkfee_config.entity");
Object.defineProperty(exports, "MerchantNetworkFeeConfigurationModel", { enumerable: true, get: function () { return merchant_networkfee_config_entity_1.MerchantNetworkFeeConfigurationModel; } });
const merchant_servicefee_config_entity_1 = require("./models/merchant_servicefee_config.entity");
Object.defineProperty(exports, "MerchantServiceFeeConfigurationModel", { enumerable: true, get: function () { return merchant_servicefee_config_entity_1.MerchantServiceFeeConfigurationModel; } });
const merchant_user_entity_1 = require("./models/merchant_user.entity");
Object.defineProperty(exports, "MerchantUser", { enumerable: true, get: function () { return merchant_user_entity_1.MerchantUser; } });
const nivapay_housewallet_entity_1 = require("./models/nivapay_housewallet.entity");
Object.defineProperty(exports, "NivapayHousewalletModel", { enumerable: true, get: function () { return nivapay_housewallet_entity_1.NivapayHousewalletModel; } });
const callback_log_entity_1 = require("./models/callback_log.entity");
Object.defineProperty(exports, "Merchant_Webhook_log", { enumerable: true, get: function () { return callback_log_entity_1.Merchant_Webhook_log; } });
const nivapay_sdk_users_entity_1 = require("./models/nivapay_sdk_users.entity");
Object.defineProperty(exports, "NivapaySdkUsersModel", { enumerable: true, get: function () { return nivapay_sdk_users_entity_1.NivapaySdkUsersModel; } });
const Core_Entities = [
    nivapay_product_entity_1.NivapayProductModel,
    nivapay_crypto_currency_entity_1.NivapayCryptoCurrencyModel,
    nivapay_fiat_currency_entity_1.NivapayFiatCurrencyModel,
    nivapay_housewallet_entity_1.NivapayHousewalletModel,
    nivapay_merchant_entity_1.NivapayMerchantModel,
    merchant_product_config_entity_1.MerchantProductConfigurationModel,
    merchant_product_crypto_config_entity_1.MerchantProductVirtualCurrencyConfigurationModel,
    merchant_product_fiat_config_entity_1.MerchantProductFiatCurrencyConfigurationModel,
    merchant_networkfee_config_entity_1.MerchantNetworkFeeConfigurationModel,
    merchant_servicefee_config_entity_1.MerchantServiceFeeConfigurationModel,
    merchant_user_entity_1.MerchantUser,
    callback_log_entity_1.Merchant_Webhook_log
];
exports.default = Core_Entities;
//# sourceMappingURL=index.js.map