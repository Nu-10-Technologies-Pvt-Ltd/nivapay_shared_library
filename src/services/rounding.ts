export function roundUpToDecimalPlaces(number: number, decimalPlaces: number): number {
    const multiplier = Math.pow(10, decimalPlaces);
    return Math.ceil(number * multiplier) / multiplier;
}

export function roundDownToDecimalPlaces(number: number, decimalPlaces: number): number {
    const multiplier = Math.pow(10, decimalPlaces);
    return Math.floor(number * multiplier) / multiplier;
} 