// Desenvolva um programa que leia 8 números garantindo que os valores informados 
// estejam entre 100 e 200 (caso não esteja apresente uma mensagem de “valor inválido”). 
// Depois de preenchido apresente os valores armazenados.

function readNumbers() {
    var numbers = [];
    for (var i = 0; i < 8; i++) {
        var num = parseInt(prompt("Enter number " + (i + 1) + ":"));
        if (num >= 100 && num <= 200) {
            numbers.push(num);
        } else {
            alert("Invalid value! Please enter a number between 100 and 200.");
            i--;
        }
    }
    alert(`Numbers: ${numbers}.`)
}

readNumbers()
