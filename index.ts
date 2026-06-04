import {validateInput} from './src/scripts/validations';
import {fizzer} from './src/scripts/fizzbuzz';
import {addToHistory, getHistory} from './src/scripts/history';

const inputElement = document.getElementById('numberInput') as HTMLInputElement;
const resultElement = document.getElementById('result') as HTMLDivElement;
const historyElement = document.getElementById('history') as HTMLUListElement;

document.getElementById('submitBtn')?.addEventListener('click', () => {
    const inputValue:string = inputElement.value;
    const number: number | null = validateInput(inputValue);
    if (number !== null) {
        const response = fizzer(number);
        resultElement.textContent = response.data.result;
        addToHistory(number, response.data.result);
        getHistory();
    }
    if (number === null) {
        resultElement.textContent = 'Please enter a valid number.';
    }

});

