export function generateRandomString (length: number): string {
    try {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUV0123456789WXYZ0123456789';
        let randomString = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
        }

        return randomString;
    } catch (error) {
        // throw new Error("");
        return null
    }
}

export function generateSequentialStringWithPrefix(prefix: string, length: number) {
    try {
        const initialTimestamp: number = Math.floor(Date.now()); // Get current timestamp in seconds
        return (): string => {
            const timestamp: number = Number(initialTimestamp)
            const paddedCounter: string = timestamp.toString().padStart(8 - prefix.length, "0");
            const result: string = prefix + paddedCounter.slice(-length);
            return result;
        }
    } catch (error) {
        console.log(error)
    }
};