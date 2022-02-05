// MAP
const ARRAY = [1, 2, 3, 4, 5, 6, 7, 8];
let novoArray = ARRAY.map((item) => item * 2);
console.log(novoArray);

// CORREÇÃO
const maca = {
    value: 2,
}
const laranja = {
    value: 3,
}
function mapOnThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const numeros = [1, 2];
console.log('this -> maçã', mapOnThis(numeros, maca));
console.log('this -> laranja', mapOnThis(numeros, laranja));

function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];
console.log(mapSemThis(nums));

// FILTER
const NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = NUMEROS.filter((num) => num % 2 == 0);
console.log(pares);

// CORREÇÃO/VERSÃO PROFESSORA
function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 == 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));

// REDUCE
function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        return prev + current;
    });
}

const arr = [1, 2];

console.log(somaNumeros(arr));