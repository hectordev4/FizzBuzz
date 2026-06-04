import type { FizzBuzzResponse } from '../../types/fizzbuzz.types';


export function fizzer(number: number): FizzBuzzResponse {
    let result: string = '';

    if (number % 3 === 0) {
        result += 'Fizz';
    }
    if (number % 5 === 0) {
        result += 'Buzz';
    }
    if (number % 3 === 0 && number % 5 === 0) {
        result = 'FizzBuzz';
    }
    if (number % 3 !== 0 && number % 5 !== 0) {
        result = number.toString();
    }


    return;
}