import { SwapOrderModel } from "./models/swap_order.entity";
import { swapTransactions } from "./models/swap_transactions.entity";

const swap_component_entities = [
    SwapOrderModel,
    swapTransactions
];

export {
    SwapOrderModel,
    swapTransactions
}

export default swap_component_entities