document.querySelectorAll('.primeira-classe .segunda-classe');
/*[
    <div class="primeira-classe segunda-classe">
        <ul>
            <li class="opcao">opcao 1</li>
            <li class="opcao">opcao 2</li>
            <li class="opcao">opcao 3</li>
        </ul>
    </div>
]
*/

document.querySelectorAll('li .opcao');
/*
[
    <li class="opcao">opcao 1</li>
    <li class="opcao">opcao 2</li>
    <li class="opcao">opcao 3</li>
]
*/

// ADICIONAR E DELETAR ELEMENTOS
// cria um elemento
document.createElement(element);

// remove um elemento
document.removeChild(element);

// adiciona um elemento
document.appendChild(element);

// substitui um elemento
document.replaceChild(novo, antigo);