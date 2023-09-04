import { DepositOrderModel } from "./models/deposit_order.entity";
import { DepositOrderAccounting } from "./models/deposit_order_accounting.entity";
import { DepositOrderAddress } from "./models/deposit_order_address.entity";
import { DepositUserEvents } from "./models/deposit_user_events.entity";
import { UserDepositTransactions } from "./models/user_deposit_transactions.entity";

const User_Deposit_Entities = [
    UserDepositTransactions,
    DepositOrderModel,
    DepositUserEvents,
    DepositOrderAccounting,
    DepositOrderAddress
]

export {
    UserDepositTransactions,
    DepositOrderModel,
    DepositUserEvents,
    DepositOrderAccounting,
    DepositOrderAddress
}

export default User_Deposit_Entities;