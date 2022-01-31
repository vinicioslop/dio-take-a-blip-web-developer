// arguments exemplo
// deste modo é possivel passar uma quantidade
// qualquer de valores como argumento e compará-los
function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

// para chamar só colocar todos os parametros separados por
// virgula
console.log(findMax(1, 2, 3, 6, 90, 1));

// spread - separa o valor de entrada em multiplas entradas
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

// rest - combina os parametros em um array
function confereTamanho(...args) {
    console.log(args.length);
}

confereTamanho() // 0
confereTamanho(1, 2) // 2
confereTamanho(3, 4, 5) // 3

// object destructing
const user = {
    id: 42,
    displayName: 'jdow',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId(id) {
    return id;
}

function getFullName({ fullName: { firstName: first, lastName: last } }) {
    return `${first} ${last}`;
}

userId(user);
// 42

getFullName(user);
// John Doe