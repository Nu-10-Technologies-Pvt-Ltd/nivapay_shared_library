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
exports.M_Balance_Track = void 0;
const typeorm_1 = require("typeorm");
let M_Balance_Track = class M_Balance_Track {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], M_Balance_Track.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], M_Balance_Track.prototype, "merchant_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], M_Balance_Track.prototype, "crypto_coin_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], M_Balance_Track.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], M_Balance_Track.prototype, "network", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], M_Balance_Track.prototype, "balance_in_crypto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], M_Balance_Track.prototype, "incoming_in_crypto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], M_Balance_Track.prototype, "network_fee_in_crypto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], M_Balance_Track.prototype, "nivapay_fee_in_crypto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0, nullable: true }),
    __metadata("design:type", Number)
], M_Balance_Track.prototype, "total_incoming_fee_in_crypto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0 }),
    __metadata("design:type", Number)
], M_Balance_Track.prototype, "outgoing_in_crypto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0, nullable: true }),
    __metadata("design:type", Number)
], M_Balance_Track.prototype, "outgoing_network_fee_in_crypto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0, nullable: true }),
    __metadata("design:type", Number)
], M_Balance_Track.prototype, "outgoing_nivapay_fee_in_crypto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0, nullable: true }),
    __metadata("design:type", Number)
], M_Balance_Track.prototype, "total_outgoing_fee_in_crypto", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], M_Balance_Track.prototype, "created_at", void 0);
M_Balance_Track = __decorate([
    (0, typeorm_1.Entity)()
], M_Balance_Track);
exports.M_Balance_Track = M_Balance_Track;
//# sourceMappingURL=m_balance_track.entity.js.map