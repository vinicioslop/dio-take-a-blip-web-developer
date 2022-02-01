let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3' }

// for
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

// for in
for (let i in array) {
    console.log(i);
}

// com object
for (i in object) {
    console.log(i);
}

// for/of
for (i of array) {
    console.log(array);
}

// com object
for (i of object.propriedade1) {
    console.log(i);
}