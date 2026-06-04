import type { HistoryItem } from '../../types/fizzbuzz.types';

const history: HistoryItem[] = [];

export function addToHistory(number: number, result: string){
    history.push({ number, result });
}

export function getHistory(): HistoryItem[] {
    return history;
}