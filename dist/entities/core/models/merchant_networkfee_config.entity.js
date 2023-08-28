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
exports.MerchantNetworkFeeConfigurationModel = void 0;
const typeorm_1 = require("typeorm");
let MerchantNetworkFeeConfigurationModel = class MerchantNetworkFeeConfigurationModel {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MerchantNetworkFeeConfigurationModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MerchantNetworkFeeConfigurationModel.prototype, "virtual_currency_config_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MerchantNetworkFeeConfigurationModel.prototype, "fee_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MerchantNetworkFeeConfigurationModel.prototype, "fee_provider", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MerchantNetworkFeeConfigurationModel.prototype, "fee_unit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MerchantNetworkFeeConfigurationModel.prototype, "fee_value", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MerchantNetworkFeeConfigurationModel.prototype, "incurred_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], MerchantNetworkFeeConfigurationModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], MerchantNetworkFeeConfigurationModel.prototype, "updatedAt", void 0);
MerchantNetworkFeeConfigurationModel = __decorate([
    (0, typeorm_1.Entity)('merchant_network_fee_configuration')
], MerchantNetworkFeeConfigurationModel);
exports.MerchantNetworkFeeConfigurationModel = MerchantNetworkFeeConfigurationModel;
//# sourceMappingURL=merchant_networkfee_config.entity.js.map