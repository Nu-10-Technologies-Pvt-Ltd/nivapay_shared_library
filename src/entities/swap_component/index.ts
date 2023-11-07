import { SwapOrderModel } from "./models/swap_order.entity";
import { swapOrderAccountingModal } from "./models/swap_order_accounting.entity";
import { swapTransactions } from "./models/swap_transactions.entity";

const swap_component_entities = [
    SwapOrderModel,
    swapTransactions,
    swapOrderAccountingModal
];

export {
    SwapOrderModel,
    swapTransactions,
    swapOrderAccountingModal
}

export default swap_component_entities