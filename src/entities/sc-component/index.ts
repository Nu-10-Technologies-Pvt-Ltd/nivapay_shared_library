import { ScOrderModel } from "./models/sc_order.entity"
import { ScOrderAccountingModal } from "./models/sc_order_accounting.entity"
import { ScTransactionsModel } from "./models/sc_transactions.entity"

const sc_component_entities = [
    ScTransactionsModel,
    ScOrderModel,
    ScOrderAccountingModal
]

export {
    ScTransactionsModel,
    ScOrderModel,
    ScOrderAccountingModal
}

export default sc_component_entities