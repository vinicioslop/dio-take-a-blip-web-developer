// CRIA UM NOVO ARRAY A PARTIR DA DADA
// CONDIÇÃO
let array = [1, 2, 3, 4, 5];
// calback - função a ser
// valor de 'this' dentro da função
array.filter(callback, thisArg);

// EXEMPLO
const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];
frutas.filter((fruta) => fruta.includes('maçã'));
// retorno: ['maçã fuji', 'maçã verde'];