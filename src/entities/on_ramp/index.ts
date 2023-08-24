import { RampOrderModel } from "./models/ramp_order.entity";
import { RampTransfer } from "./models/ramp_transfer.entity";
import { TransakWebHookEvent } from "./models/transak_webhook_events.entity";

const OnRamp_Entities = [
    RampOrderModel,
    RampTransfer,
    TransakWebHookEvent
]

export {
    RampOrderModel,
    RampTransfer,
    TransakWebHookEvent
}

export default OnRamp_Entities;