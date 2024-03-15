import * as validateWallet from 'validate-wallet';

export function validate_wallet_address(network: string, address: string): boolean {
    try {
        // console.log('inside validate ######')
        // return validateWallet.validate(network, address);
        return true;
    } catch (error) {
        console.error('Error occurred while validating wallet address:', error.message);
        return false;
    }
}