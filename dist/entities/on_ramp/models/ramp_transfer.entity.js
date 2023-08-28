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
exports.RampTransfer = void 0;
const typeorm_1 = require("typeorm");
let RampTransfer = class RampTransfer {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], RampTransfer.prototype, "transfer_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampTransfer.prototype, "order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], RampTransfer.prototype, "order_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampTransfer.prototype, "ramptransactionHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: "TRANSFERRING" }),
    __metadata("design:type", String)
], RampTransfer.prototype, "order_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RampTransfer.prototype, "transaction_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RampTransfer.prototype, "merchant_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RampTransfer.prototype, "symbol", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", nullable: true }),
    __metadata("design:type", Number)
], RampTransfer.prototype, "transaction_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", nullable: true }),
    __metadata("design:type", Number)
], RampTransfer.prototype, "network_fee_in_crypto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", nullable: true }),
    __metadata("design:type", Number)
], RampTransfer.prototype, "service_fee_in_crypto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RampTransfer.prototype, "network", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RampTransfer.prototype, "fromAddress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RampTransfer.prototype, "toAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 'user-deposit' }),
    __metadata("design:type", String)
], RampTransfer.prototype, "transaction_type", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamptz" }),
    __metadata("design:type", Date)
], RampTransfer.prototype, "createdAt", void 0);
RampTransfer = __decorate([
    (0, typeorm_1.Entity)("ramp-transfer")
], RampTransfer);
exports.RampTransfer = RampTransfer;
//# sourceMappingURL=ramp_transfer.entity.js.map