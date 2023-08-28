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
exports.DepositOrderAccounting = void 0;
const typeorm_1 = require("typeorm");
let DepositOrderAccounting = class DepositOrderAccounting {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], DepositOrderAccounting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DepositOrderAccounting.prototype, "order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], DepositOrderAccounting.prototype, "transactionId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DepositOrderAccounting.prototype, "coin_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DepositOrderAccounting.prototype, "coin_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], DepositOrderAccounting.prototype, "grossAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], DepositOrderAccounting.prototype, "serviceFeeByMerchant", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], DepositOrderAccounting.prototype, "serviceFeeByUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], DepositOrderAccounting.prototype, "estimatedNetworkFeeByMerchant", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0, nullable: true }),
    __metadata("design:type", Number)
], DepositOrderAccounting.prototype, "actualNetworkFeeByUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0, nullable: true }),
    __metadata("design:type", Number)
], DepositOrderAccounting.prototype, "estimatedNetworkFeeByUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], DepositOrderAccounting.prototype, "netAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], DepositOrderAccounting.prototype, "new_incoming_balance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], DepositOrderAccounting.prototype, "new_outgoing_balance", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", String)
], DepositOrderAccounting.prototype, "createdAt", void 0);
DepositOrderAccounting = __decorate([
    (0, typeorm_1.Entity)('deposit-order-accounting')
], DepositOrderAccounting);
exports.DepositOrderAccounting = DepositOrderAccounting;
//# sourceMappingURL=deposit_order_accounting.entity.js.map