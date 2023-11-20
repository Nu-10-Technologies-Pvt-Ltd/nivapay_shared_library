import { OnrampOrder } from "./models/create-onramp-order.entity";
import { OnrampOrderAccounting } from "./models/onrampOrderAccounting.entity";
import { RampOrderModel } from "./models/ramp_order.entity";
import { RampTransfer } from "./models/ramp_transfer.entity";
import { TransakWebHookEvent } from "./models/transak_webhook_events.entity";

const OnRamp_Entities = [
    RampOrderModel,
    RampTransfer,
    TransakWebHookEvent,
    OnrampOrderAccounting,
    OnrampOrder
]

export {
    RampOrderModel,
    RampTransfer,
    TransakWebHookEvent,
    OnrampOrderAccounting,
    OnrampOrder
}

export default OnRamp_Entities;