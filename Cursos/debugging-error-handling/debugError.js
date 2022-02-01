/*
Atividade: validação de erros por tipo
O objetivo é que a função receba um arrayay e
retorne ele caso o seu tamanho corresponda ao
número enviado como parâmetro na função.
Caso contrário, um erro será lançado.

Crie uma função que recebe um arrayay e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um
erro do tipo ReferenceError
Se o arrayay não for do tipo 'object', lance um
erro do tipo TypeError
Se o número não for do tipo 'number', lance um
erro do tipo TypeError
Se o tamanho do array for diferente do número
enviado como parâmetro, lance um erro do tipo
RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de
erro utilizando o operador instanceof
*/

function retornaSeValido(array, tamanho) {
    try {
        if (arguments.length == 0) throw ReferenceError('Envie os parâmetros');

        if (typeof array !== 'object') throw TypeError('Array precisa ser do tipo object');

        if (typeof tamanho !== 'number') throw TypeError('Tamanho precisa ser do tipo number');

        if (array.length !== tamanho) throw RangeError('Tamanho do array é inválido');

        return array;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('ReferenceError');
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log('TypeError');
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log('RangeError');
            console.log(e.message);
        } else {
            console.log('Tipo de erro não esperado:' + e);
        }
    }
}

let array = [1, 2, 3, 4, 5, 6];
console.log(retornaSeValido());