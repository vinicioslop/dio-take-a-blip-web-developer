/*
Troque todos os numeroos pares e diferentes de zero
de um array pelo número 0. Se o array for vazio,
retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]
Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []
Output -> -1
*/
function trocaPar(array) {
    if (array.length === 0) return -1;

    let novoArray = [];

    array.forEach(numero => {
        if (numero === 0) {
            console.log("Já é 0.")
        } else if (numero % 2 === 0) {
            novoArray.push(0);
        } else {
            novoArray.push(numero);
        }
    });

    return novoArray;
}

let array = [1, 3, 4, 6, 80, 33, 0, 23, 90];
let arrayVazio = [];

console.log(trocaPar(array));