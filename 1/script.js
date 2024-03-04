// Desenvolva um programa que a partir de um vetor de inteiros com 5 valores inicializados na declaração
// apresente o dobro de cada valor armazenado.

function double() { 
    var numbers = [2, 5, 8, 6, 3];
    alert(`Numbers: ${numbers}`)
    var doubleNumbers = []; 
    for(let i in numbers){
        let n = numbers[i] * 2;
        doubleNumbers.push(n); 
    }
    alert(`Double numbers are: ${doubleNumbers}`);
}

double();
