import type { FizzBuzzResponse } from '../../types/fizzbuzz.types';


function fizzBuzzCore(number: number): string {
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

    return result;
}

export function fizzer(number: number): FizzBuzzResponse {
    
    const response: FizzBuzzResponse = {
        status: 'success',
        message: 'Number evaluated successfully',
        data: {
            number,
            result: ''
        }
    };
    
    const result = fizzBuzzCore(number);

    response.data.result = result;

    return response;
}