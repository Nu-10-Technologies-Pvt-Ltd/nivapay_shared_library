import { OnrampOrder } from "./models/create-onramp-order.entity";
import { OnrampOrderAccounting } from "./models/onrampOrderAccounting.entity";
import { OnRampTreasuryTransactionModel } from "./models/ramp_treasury_transaction.entity";
import { TransakWebHookEvent } from "./models/transak_webhook_events.entity";
import { RampWebHookEvent } from "./models/webhook.event.entity";

const OnRamp_Entities = [
    TransakWebHookEvent,
    OnrampOrderAccounting,
    OnrampOrder,
    OnRampTreasuryTransactionModel,
    RampWebHookEvent
]

export {
    TransakWebHookEvent,
    OnrampOrderAccounting,
    OnrampOrder,
    OnRampTreasuryTransactionModel,
    RampWebHookEvent
}

export default OnRamp_Entities;