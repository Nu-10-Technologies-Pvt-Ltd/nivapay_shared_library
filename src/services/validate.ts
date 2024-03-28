export function validate_wallet_address(network: string, address: string): boolean {
    try {
        return true;
    } catch (error) {
        console.error('Error occurred while validating wallet address:', error.message);
        return false;
    }
}