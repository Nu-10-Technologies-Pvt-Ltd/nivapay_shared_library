import { DwComponentOrderModel } from "./models/dw_order.entity";
import { DwComponentOrderAccountingModel } from "./models/dw_order_accounting.entity";
import { DwComponentTransactionsModel } from "./models/dw_transactions.entity";

const dw_component_entities = [
    DwComponentOrderModel,
    DwComponentOrderAccountingModel,
    DwComponentTransactionsModel
]

export {
    DwComponentOrderModel,
    DwComponentOrderAccountingModel,
    DwComponentTransactionsModel
}

export default dw_component_entities