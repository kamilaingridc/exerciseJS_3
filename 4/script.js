// Desenvolva um programa que leia 10 números e apresente os valores pares.
// Caso não tenha nenhum número par, apresente a mensagem “Todos os números são ímpares.”

function even() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    alert(`Numbers: ${numbers}`);
    
    let evens = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evens.push(numbers[i]);
        }
    }
    
    if (evens.length > 0) {
        alert(`Even numbers: ${evens}`);
    } else {
        alert("All numbers are odd.");
    }
}

even();
