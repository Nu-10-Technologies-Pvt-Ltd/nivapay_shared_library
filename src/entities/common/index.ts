import { AccountCurrencyBalances } from "./models/account_currency_balances.entity";
import { AccountWalletAddress } from "./models/account_wallet_address.entity";
import { Accounts_Accounting } from "./models/accounts_accounting.entity";
import { M_Balance } from "./models/m_balance.entity";
import { M_Balance_Track } from "./models/m_balance_track.entity";
import { Accounts } from "./models/nivapay_accounts.entity";
import { NivapayKmsWallet } from "./models/nivapay_kms_wallets.entity";
import { onChainTransactions } from "./models/on_chain_transactions.entity";

const Common_Entities = [
    M_Balance,
    M_Balance_Track,
    onChainTransactions,
    AccountWalletAddress,
    Accounts,
    Accounts_Accounting,
    NivapayKmsWallet,
    AccountCurrencyBalances
]

export {
    M_Balance,
    M_Balance_Track,
    onChainTransactions,
    AccountWalletAddress,
    Accounts,
    Accounts_Accounting,
    NivapayKmsWallet,
    AccountCurrencyBalances
}

export default Common_Entities;