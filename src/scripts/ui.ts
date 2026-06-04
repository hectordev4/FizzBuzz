

export function ValidateInput(input: string): number | null {
    const number = parseInt(input.trim());
    try {
        if (isNaN(number) || number < 1) {
            throw new Error('Input is not a valid number');
        }
        return number;
    } catch (error) {
        console.error(error);
        return null;
    }
}