/*
Atividade 2: Sets
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5],
retorne outro array apenas com valores únicos.
*/
function retornaUnicos(arr) {
    const mySet = new Set(arr);

    // usa o metodo spread para tranformar os set em um array
    return [...mySet];
}

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];
console.log(retornaUnicos(arr));