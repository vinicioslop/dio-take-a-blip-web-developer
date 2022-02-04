/// MODO ANTIGO
var Meal = function(food) {
    this.food = food
}

Meal.prototype.eat = function() {
    return '😋 '
}

// NOVO MODO - tecnicamente não existe, é chamado de syntatic
// sugar, uma maneira feita para facilitar a escrita destas
// estruturas
class Meal {
    constructor (food) {
        this.food = food
    }

    eat() {
        return '😋 '
    }
}