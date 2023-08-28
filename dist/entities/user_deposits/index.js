"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositOrderAccounting = exports.DepositUserEvents = exports.DepositOrderModel = exports.UserDepositTransactions = void 0;
const deposit_order_entity_1 = require("./models/deposit_order.entity");
Object.defineProperty(exports, "DepositOrderModel", { enumerable: true, get: function () { return deposit_order_entity_1.DepositOrderModel; } });
const deposit_order_accounting_entity_1 = require("./models/deposit_order_accounting.entity");
Object.defineProperty(exports, "DepositOrderAccounting", { enumerable: true, get: function () { return deposit_order_accounting_entity_1.DepositOrderAccounting; } });
const deposit_user_events_entity_1 = require("./models/deposit_user_events.entity");
Object.defineProperty(exports, "DepositUserEvents", { enumerable: true, get: function () { return deposit_user_events_entity_1.DepositUserEvents; } });
const user_deposit_transactions_entity_1 = require("./models/user_deposit_transactions.entity");
Object.defineProperty(exports, "UserDepositTransactions", { enumerable: true, get: function () { return user_deposit_transactions_entity_1.UserDepositTransactions; } });
const User_Deposit_Entities = [
    user_deposit_transactions_entity_1.UserDepositTransactions,
    deposit_order_entity_1.DepositOrderModel,
    deposit_user_events_entity_1.DepositUserEvents,
    deposit_order_accounting_entity_1.DepositOrderAccounting
];
exports.default = User_Deposit_Entities;
//# sourceMappingURL=index.js.map