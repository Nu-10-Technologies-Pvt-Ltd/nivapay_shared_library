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
exports.deposit_wallet_addressess = exports.DepositOrderModel = void 0;
const typeorm_1 = require("typeorm");
let DepositOrderModel = class DepositOrderModel {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ unique: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "jsonb", default: [] }),
    __metadata("design:type", Array)
], DepositOrderModel.prototype, "deposit_wallet_addressess", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: "PENDING" }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "order_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "order_user_email_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "order_currency_network", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "merchant_brand_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "user_action", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "user_action_timer_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "order_fiat_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "order_fiat_symbol", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "order_crypto_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "order_crypto_symbol", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "order_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "order_currency_symbol", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "order_currency_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "virtual_currency_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "currency_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "merchant_user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "merchant_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "user_email_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "user_first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "user_last_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "merchant_redirect_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "merchant_order_ref", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "user-deposit" }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], DepositOrderModel.prototype, "testnet", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], DepositOrderModel.prototype, "redirected", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DepositOrderModel.prototype, "merchant_webhook_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], DepositOrderModel.prototype, "transaction_initiated_event_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], DepositOrderModel.prototype, "detecting_eta_mins", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], DepositOrderModel.prototype, "createdAt", void 0);
DepositOrderModel = __decorate([
    (0, typeorm_1.Entity)("deposit_order")
], DepositOrderModel);
exports.DepositOrderModel = DepositOrderModel;
class deposit_wallet_addressess {
}
exports.deposit_wallet_addressess = deposit_wallet_addressess;
//# sourceMappingURL=deposit_order.entity.js.map