import { CryptoOrderAccountingModel } from "./models/crypto_accounting.entity";
import { CryptoOrderModel } from "./models/crypto_order.entity";
import { CryptoOrderTransactionsModel } from "./models/crypto_order_transactions.entity";

const Crypto_Component_Entities = [
    CryptoOrderAccountingModel,
    CryptoOrderModel,
    CryptoOrderTransactionsModel
]

export {
    CryptoOrderAccountingModel,
    CryptoOrderModel,
    CryptoOrderTransactionsModel
}

export default Crypto_Component_Entities