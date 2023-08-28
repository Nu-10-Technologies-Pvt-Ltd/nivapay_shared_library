"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransakWebHookEvent = exports.RampTransfer = exports.RampOrderModel = void 0;
const ramp_order_entity_1 = require("./models/ramp_order.entity");
Object.defineProperty(exports, "RampOrderModel", { enumerable: true, get: function () { return ramp_order_entity_1.RampOrderModel; } });
const ramp_transfer_entity_1 = require("./models/ramp_transfer.entity");
Object.defineProperty(exports, "RampTransfer", { enumerable: true, get: function () { return ramp_transfer_entity_1.RampTransfer; } });
const transak_webhook_events_entity_1 = require("./models/transak_webhook_events.entity");
Object.defineProperty(exports, "TransakWebHookEvent", { enumerable: true, get: function () { return transak_webhook_events_entity_1.TransakWebHookEvent; } });
const OnRamp_Entities = [
    ramp_order_entity_1.RampOrderModel,
    ramp_transfer_entity_1.RampTransfer,
    transak_webhook_events_entity_1.TransakWebHookEvent
];
exports.default = OnRamp_Entities;
//# sourceMappingURL=index.js.map