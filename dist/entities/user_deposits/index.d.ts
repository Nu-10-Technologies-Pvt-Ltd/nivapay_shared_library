import { DepositOrderModel } from "./models/deposit_order.entity";
import { DepositOrderAccounting } from "./models/deposit_order_accounting.entity";
import { DepositUserEvents } from "./models/deposit_user_events.entity";
import { UserDepositTransactions } from "./models/user_deposit_transactions.entity";
declare const User_Deposit_Entities: (typeof DepositOrderModel | typeof DepositOrderAccounting | typeof DepositUserEvents | typeof UserDepositTransactions)[];
export { UserDepositTransactions, DepositOrderModel, DepositUserEvents, DepositOrderAccounting };
export default User_Deposit_Entities;
