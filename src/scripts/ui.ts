import type { HistoryItem, FizzBuzzResponse } from '../../types/fizzbuzz.types';
import { getHistory } from './history';


const resultElement = document.getElementById('result') as HTMLDivElement;
const historyElement = document.getElementById('history') as HTMLUListElement;

export function displayResult(response: FizzBuzzResponse | null): void {
    if (response) {
        resultElement.textContent = response.data.result;
    } else {
        resultElement.textContent = 'Please enter a valid number.';
    }
}

export function updateHistory(): void {
    const history: HistoryItem[] = getHistory();
    historyElement.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Number: ${item.number}, Result: ${item.result}`;
        historyElement.appendChild(li);
    });
}