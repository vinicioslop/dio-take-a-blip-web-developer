// COMENTARIO DE UMA LINHA

/*
COMENTARIO DE VARIAS LINHAS
*/

/* var y = 0;
var x = 1; */

function soma(a, b) {
    return a + b; // 20
}

soma(10, 10);

console.log(soma(2, 20));

function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par`)
        }
    }
    console.log('Os números pares são', evenNums);
}

var array = [1, 2, 3, 4, 5, 6, 7, 8];

returnEvenValues(array);