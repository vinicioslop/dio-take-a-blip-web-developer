// FUNÇÃO QUE MAPEIA UM ARRAY CRIANDO UM NOVO
// EXEMPLO DE ESTRUTURA DO MAP
/*
let array = [];

array.map(callback, thisArg);
callback(item, index, array);
*/

// COM MAP
const array = [1, 2, 3, 4, 5];
array.map((item) => item * 2); // retorna: [2, 4, 6, 8, 10]

// COM FOREACH
const array = [1, 2, 3, 4, 5];
array.forEach((item) => item * 2); // retorna: undefined