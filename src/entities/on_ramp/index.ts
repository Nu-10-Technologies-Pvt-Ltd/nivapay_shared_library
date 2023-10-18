import { OnrampOrderAccounting } from "./models/onrampOrderAccounting.entity";
import { RampOrderModel } from "./models/ramp_order.entity";
import { RampTransfer } from "./models/ramp_transfer.entity";
import { TransakWebHookEvent } from "./models/transak_webhook_events.entity";

const OnRamp_Entities = [
    RampOrderModel,
    RampTransfer,
    TransakWebHookEvent,
    OnrampOrderAccounting
]

export {
    RampOrderModel,
    RampTransfer,
    TransakWebHookEvent,
    OnrampOrderAccounting
}

export default OnRamp_Entities;