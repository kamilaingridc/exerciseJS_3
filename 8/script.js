// Desenvolva um programa que leia 6 números inteiros e armazene em um vetor A. 
// Carregue um vetor B (de mesmo tipo e tamanho) com a metade dos valores armazenados em A. 
// Apresente os valores dos dois vetores.

function processNumbers() {
    let vectorA = [];
    let vectorB = [];

    for (let i = 0; i < 6; i++) {
        let number = parseInt(prompt("Enter integer number " + (i + 1) + ":"));
        vectorA.push(number);
        vectorB.push(number / 2);
    }

    alert("Values of vector A:");
    alert(vectorA.join(", "));
    alert("Values of vector B:");
    alert(vectorB.join(", "));
}

processNumbers();
