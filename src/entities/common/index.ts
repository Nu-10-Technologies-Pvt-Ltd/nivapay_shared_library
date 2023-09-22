import { accountWalletAddress } from "./models/account_wallet_address.entity";
import { Accounts_Accounting } from "./models/accounts_accounting.entity";
import { Accounts_Balance } from "./models/accounts_balance.entity";
import { M_Balance } from "./models/m_balance.entity";
import { M_Balance_Track } from "./models/m_balance_track.entity";
import { Accounts } from "./models/nivapay_accounts.entity";
import { onChainTransactions } from "./models/on_chain_transactions.entity";

const Common_Entities = [
    M_Balance,
    M_Balance_Track,
    onChainTransactions,
    accountWalletAddress,
    Accounts,
    Accounts_Accounting,
    Accounts_Balance
]

export {
    M_Balance,
    M_Balance_Track,
    onChainTransactions,
    accountWalletAddress,
    Accounts,
    Accounts_Accounting,
    Accounts_Balance
}

export default Common_Entities;