import { RampOrderModel } from "./models/ramp_order.entity";
import { RampTransfer } from "./models/ramp_transfer.entity";
import { RampWebHookEvent } from "./models/transak_webhook_events.entity";

const OnRamp_Entities = [
    RampOrderModel,
    RampTransfer,
    RampWebHookEvent
]

export {
    RampOrderModel,
    RampTransfer,
    RampWebHookEvent
}

export default OnRamp_Entities;