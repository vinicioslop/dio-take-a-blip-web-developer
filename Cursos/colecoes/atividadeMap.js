/*
Atividade 1: USERSs
Crie uma função que retorna o nome dos USERS de
um USERS que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um USERS;
Crie um USERS e popule-o com nomes de usuários e seus
papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para
retornar uma lista com os nomes dos usu;arios que
são administradores.
*/
function getAdmins(users) {
    let admins = [];

    for ([key, value] of users) {
        if (value == 'Admin') {
            admins.push(key);
        }
    }

    return admins;
}

const USERS = new Map();

USERS.set('Luiz', 'Admin');
USERS.set('Carlos', 'Sup');
USERS.set('João', 'Dev');
USERS.set('Julia', 'Admin');
USERS.set('Ana', 'Lead');
USERS.set('Tainá', 'Admin');
USERS.set('Pedro', 'Sup');
USERS.set('Lucas', 'Dev');

console.log(getAdmins(USERS));