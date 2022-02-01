var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function changeColor() {
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    } else {
        currentNumberWrapper.style.color = 'black';
    }
}

function plusButtonOnOff() {
    var plusButton = document.getElementsByName('adicionar')[0];

    if (currentNumber >= 10) {
        plusButton.disabled = true;
    } else {
        plusButton.disabled = false;
    }
}