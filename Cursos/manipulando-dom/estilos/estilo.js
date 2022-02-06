// CLASSES - Element.classList

// EXEMPLOS
const meuElemento = document.getElementById("meu-elemento");

meuElemento.classList.add("novo-estilo");
// Adiciona a classe "meu-estilo"

meuElemento.classList.remove("classe");
// Remove a classe "classe"

meuElemento.classList.toggle("dark-mode");
// Adiciona a classe "dark-mode" caso ela
// não faça parte da lista e remove ela
// faça.

// ACESSANDO ESTILO DIRETAMENTE
document.getElementsByTagName("p").style.color = blue;