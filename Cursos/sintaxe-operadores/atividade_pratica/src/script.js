/**
 * Atividade Prática em JavaScript
 * 
 * Tarefas:
 *  - Crie uma função que receba dois números como
 *    paramtros;
 *  - Confira se os números são iguais;
 *  - Confira se a soma entre os 2 números é maior que 10
 *    ou menor que 20;
 *  - Retorne uma string dizendo "Os números num1 e num2
 *    não/são iguais. Sua soma é soma, que é maior/menor
 *    que 10 e maior/menor que 20."
 */

// SOLUÇÃO USANDO IF TERNARIO
function desafioTernario(n1, n2) {
    const soma = n1 + n2;
    var msg = `Os números ${n1} e ${n2} `;

    msg += (n1 == n2) ? "são iguais. " : "não são iguais. ";
    msg += `Sua soma é ${soma}, que é `;
    msg += (soma > 10) ? "maior que 10 e " : "menor que 10 e ";
    msg += (soma > 20) ? "maior que 20." : "menor que 20.";

    return msg;
}

// SOLUÇÃO USANDO IF, ELSE IF E ELSE
function desafioPadrao(n1, n2) {
    const soma = n1 + n2;
    var msg = "";

    if (n1 === n2) {
        msg = `Os números ${n1} e ${n2} são iguais. `;
    } else {
        msg = `Os números ${n1} e ${n2} não são iguais. `;
    }

    if (soma > 10) {
        msg += `Sua soma é ${soma}, que é maior que 10 `;
    } else if (soma < 10) {
        msg += `Sua soma é ${soma}, que é menor que 10 `;
    } else {
        msg += `Sua soma é ${soma}, que é igual a 10 `;
    }

    if (soma > 20) {
        msg += `e maior que 20.`;
    } else if (soma < 20) {
        msg += `e menor que 20.`;
    } else {
        msg += `e igual a 20.`;
    }

    return msg;
}

function main() {
    let n1 = 10, n2 = 10;

    if (!n1 || !n2) {
        console.log('Entrada de dados é inválida! Tente novamente.');
        main();
    }

    // desafioTernario(n1, n2);
    var msg = desafioPadrao(n1, n2);

    console.log(msg);
}

main();