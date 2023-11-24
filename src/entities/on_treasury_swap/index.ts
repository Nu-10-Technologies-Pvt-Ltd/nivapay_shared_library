/* eslint-disable prettier/prettier */
import { onrampToTreasurySwapOrders } from "./models/create-o2s-order.entity";
import { onrampTreasureSwapOrder } from "./models/onRampTrasureOrder.entity";
import { treasurySwapOrderAccountingModal } from "./models/treasurySwapOrderAccounting.entity";

const onRampTreasureSwapEntities = [
    onrampTreasureSwapOrder,
    treasurySwapOrderAccountingModal,
    onrampToTreasurySwapOrders
]

export {
    onrampTreasureSwapOrder,
    treasurySwapOrderAccountingModal,
    onrampToTreasurySwapOrders
}

export default onRampTreasureSwapEntities;