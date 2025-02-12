export {};//El archivo se convierte en un módulo, y sus declaraciones ya no estarán en el ámbito global.

function prepareGifts(gifts: number[]): number[] {//parámetro gifts es un array de números : la función devuelve un array de números
    // Eliminar duplicados usando Set y convertir de nuevo a array
    const uniqueGifts = [...new Set(gifts)];
    // Ordenar la lista en orden ascendente
    uniqueGifts.sort((a, b) => a - b);
    return uniqueGifts;
}

// Ejemplos de uso
const gifts1: number[] = [3, 1, 2, 3, 4, 2, 5];
const preparedGifts1: number[] = prepareGifts(gifts1);
console.log(preparedGifts1); // [1, 2, 3, 4, 5]

const gifts2: number[] = [6, 5, 5, 5, 5];
const preparedGifts2: number[] = prepareGifts(gifts2);
console.log(preparedGifts2); // [5, 6]

const gifts3: number[] = [];
const preparedGifts3: number[] = prepareGifts(gifts3);
console.log(preparedGifts3); // []