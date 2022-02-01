/*
Atividade 1
Verifique, de duas maneiras diferentes entre si,
se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler,
indiferentemente, da esquerda para a direita
ou vice-versa (ex.: raiar, ama, ovo, radar)
*/

//solução 01
function verificaSePalindromo01(frase) {
    if (!frase) return "string vazia";

    let fraseInvertida = [];

    for (let i = 0; i < frase.length; i++) {
        fraseInvertida.unshift(frase[i]);
    }

    return fraseInvertida.join("") == frase;
}

// solução 02
function verificaSePalindromo02(frase) {
    if (!frase)
        return "string vazia";

    for (let i = 0; i < frase.length / 2; i++) {
        if (frase[i] != frase[frase.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaSePalindromo01("teto"));
console.log(verificaSePalindromo02("ana"));