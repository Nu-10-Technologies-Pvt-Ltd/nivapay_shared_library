import { accountWalletAddress } from "./models/account_wallet_address.entity";
import { accounts } from "./models/accounts.entity";
import { M_Balance } from "./models/m_balance.entity";
import { M_Balance_Track } from "./models/m_balance_track.entity";
import { onChainTransactions } from "./models/on_chain_transactions.entity";

const Common_Entities = [
    M_Balance,
    M_Balance_Track,
    onChainTransactions,
    accounts,
    accountWalletAddress
]

export {
    M_Balance,
    M_Balance_Track,
    onChainTransactions,
    accounts,
    accountWalletAddress
}

export default Common_Entities;