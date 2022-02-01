/*
Atividade 1: Alunos Aprovados
1. Crie uma função que recebe o array alunos e um número
   que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar apenas
   com os alunos cujas notas são maiores ou iguais à média
   final;
3. Utilize a técnica "object destructuring" para manipular
   as propriedades desejadas de cada aluno.
*/

function retornaNomeCompleto({ nome: primeiro, sobrenome: segundo }) {
    return `${primeiro} ${segundo}`;
}
function retornaNota({ nota: nota }) {
    return nota;
}

function alunosAprovados(alunos, mediaFinal) {
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++) {

        const {nota} = alunos[i];

        if (nota >= mediaFinal) {
            aprovados.push(retornaNomeCompleto(alunos[i]));
        }
    }

    return aprovados;
}

const ALUNOS = [
    {
        nome: 'Andre',
        sobrenome: 'Luiz',
        nota: 7
    },
    {
        nome: 'Carlos',
        sobrenome: 'Antonio',
        nota: 2
    },
    {
        nome: 'Ana',
        sobrenome: 'Cristina',
        nota: 9,
    },
    {
        nome: 'Victor',
        sobrenome: 'Lopes',
        nota: 10
    },
    {
        nome: 'Pedro',
        sobrenome: 'Sousa',
        nota: 0
    }
];

const MEDIA_FINAL = 6;
const APROVADOS = alunosAprovados(ALUNOS, MEDIA_FINAL);

console.log(APROVADOS);