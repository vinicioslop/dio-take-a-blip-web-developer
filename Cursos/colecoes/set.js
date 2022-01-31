// estrutura que armazena apenas valores únicos
//const myArray = [1, 1, 2, 3, 4, 5, 6, 7, 8, 2, 1];
const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1);
// true

mySet.has(3);
//false

mySet.delete(5);