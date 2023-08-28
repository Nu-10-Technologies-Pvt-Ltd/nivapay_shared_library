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
exports.RampOrderModel = void 0;
const typeorm_1 = require("typeorm");
let RampOrderModel = class RampOrderModel {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RampOrderModel.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, unique: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RampOrderModel.prototype, "order_fiat_amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RampOrderModel.prototype, "order_fiat_symbol", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], RampOrderModel.prototype, "order_crypto_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: true }),
    __metadata("design:type", Boolean)
], RampOrderModel.prototype, "testnet", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "transaction_crypto__amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "transaction_crypto_symbol", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "transaction_crypto_asset", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "transaction_hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "transaction_hash_explorer_url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RampOrderModel.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RampOrderModel.prototype, "convert_to_crypto_symbol", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RampOrderModel.prototype, "convert_to_crypto_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "user_email_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "user_first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "user_last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "user_mobileNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "user_dob", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "user_addressLine1", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "user_addressLine2", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "user_city", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "user_state", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "user_postCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "user_countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "merchant_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RampOrderModel.prototype, "merchant_redirect_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "merchant_webhook_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "merchant_txn_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "merchant_user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "order_user_email_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: "PENDING" }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "order_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "user_wallet_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "nivapay_hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "merchant_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "is_autofilluserdata", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "disableWalletAddressForm", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "transak_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "isBuyOrSell", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "merchant_wallet_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampOrderModel.prototype, "transfer_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], RampOrderModel.prototype, "service_fee_in_crypto", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], RampOrderModel.prototype, "network_fee_in_crypto", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], RampOrderModel.prototype, "redirected", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], RampOrderModel.prototype, "createdAt", void 0);
RampOrderModel = __decorate([
    (0, typeorm_1.Entity)('ramp_order')
], RampOrderModel);
exports.RampOrderModel = RampOrderModel;
//# sourceMappingURL=ramp_order.entity.js.map