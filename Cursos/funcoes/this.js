/*
Dada a função calculaIdade, utilize os métodos
call e apply para modificar o valor de this.
Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}
*/
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        } anos de idade.`;
};

const PESSOA1 = {
    nome: 'Maria',
    idade: 30
};

const PESSOA2 = {
    nome: 'Carla',
    idade: 26
};

const ANIMAL = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug'
};

console.log(calculaIdade.apply(PESSOA2, [30]));