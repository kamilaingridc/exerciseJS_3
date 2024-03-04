// Desenvolva um programa que leia a idade de 20 pessoas e apresente as idades acima da média.

function average() { 
    var numbers = [2, 5, 8, 6, 3, 10, 84, 50, 30, 51, 74, 62, 85, 64, 70, 19, 15, 16, 87, 40];
    alert(`Numbers: ${numbers}`);
    
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length;
    let biggerAges = numbers.filter(function(age) {
        return age > average;
    });
    alert(`Ages above average: ${biggerAges}`);
}

average();
