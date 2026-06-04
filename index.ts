import {validateInput} from './src/scripts/validations';
import {fizzer} from './src/scripts/fizzbuzz';
import {addToHistory} from './src/scripts/history';
import {displayResult, updateHistory} from './src/scripts/ui';

const inputElement = document.getElementById('numberInput') as HTMLInputElement;

document.getElementById('submitBtn')?.addEventListener('click', () => {
    const inputValue:string = inputElement.value;
    const number: number | null = validateInput(inputValue);
    if (number !== null) {
        const response = fizzer(number);
        displayResult(response);
        addToHistory(number, response.data.result);
        updateHistory();
    }
    if (number === null) {
        displayResult(number);
    }
});

