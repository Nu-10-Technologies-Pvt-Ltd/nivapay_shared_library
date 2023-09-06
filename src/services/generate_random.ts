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