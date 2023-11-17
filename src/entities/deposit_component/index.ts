import { DepositComponentOrderModel } from "./models/deposit_order.entity";
import { DepositComponentOrderAccountingModel } from "./models/deposit_order_accounting.entity";
import { DepositComponentTransactionsModel } from "./models/deposit_transactions.entity";

const deposit_component_entities = [
    DepositComponentOrderModel,
    DepositComponentOrderAccountingModel,
    DepositComponentTransactionsModel
]

export {
    DepositComponentOrderModel
}

export default deposit_component_entities