export interface FizzBuzzResponse { 
	status: string; // Código indicando éxito o error 
	message: string; // Mensaje 
	data: { 
		number: number; // Número evaluado 
		result: string; // Resultado esperado 
	}; 
}

export interface HistoryItem {
  number: number;
  result: string;
}

