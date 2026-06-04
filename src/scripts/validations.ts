export function validateInput(input: string): number | null {
    const number = parseInt(input.trim());
    try {
        if (isNaN(number) || number < 1) {
            return null;
        }
        return number;
    } catch (error) {
        console.error(error);
        return null;
    }
}