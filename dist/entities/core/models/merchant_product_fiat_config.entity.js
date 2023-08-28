"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantProductFiatCurrencyConfigurationModel = void 0;
const typeorm_1 = require("typeorm");
let MerchantProductFiatCurrencyConfigurationModel = class MerchantProductFiatCurrencyConfigurationModel {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], MerchantProductFiatCurrencyConfigurationModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MerchantProductFiatCurrencyConfigurationModel.prototype, "product_config_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MerchantProductFiatCurrencyConfigurationModel.prototype, "fiat_currency_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], MerchantProductFiatCurrencyConfigurationModel.prototype, "is_enabled", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], MerchantProductFiatCurrencyConfigurationModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], MerchantProductFiatCurrencyConfigurationModel.prototype, "updatedAt", void 0);
MerchantProductFiatCurrencyConfigurationModel = __decorate([
    (0, typeorm_1.Entity)('merchant_product_fiatcurrency_configuration')
], MerchantProductFiatCurrencyConfigurationModel);
exports.MerchantProductFiatCurrencyConfigurationModel = MerchantProductFiatCurrencyConfigurationModel;
//# sourceMappingURL=merchant_product_fiat_config.entity.js.map