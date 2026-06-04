import type { FizzBuzzResponse } from '../../types/fizzbuzz.types';


export function fizzBuzz(number: number): string{
    let result: string = '';

    if (number % 3 === 0) {
        result += 'Fizz';
    }
    if (number % 5 === 0) {
        result += 'Buzz';
    }
    return result;
}