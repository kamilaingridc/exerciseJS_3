//Desenvolva um programa que a partir de um vetor de inteiros com 8 valores inicializados na declaração 
//apresente a média aritméticas desses valores.

function average() { 
    var numbers = [2, 5, 8, 6, 3, 10, 84, 95];
    alert(`Numbers: ${numbers}`);
    
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let n = (sum / numbers.length).toFixed(2);
    alert(`Average is: ${n}`);
}

average();
