// Desenvolva um programa que leia 5 números inteiros e armazene em um vetor A. 
// Leia 5 números inteiros e armazene em um vetor B. 
// Carregue e apresente um vetor C com os valores de A e B alternados. 

function combineArrays() {
    let arrayA = [];
    let arrayB = [];
    let arrayC = [];

    function readIntegers(array) {
        for (let i = 0; i < 5; i++) {
            let num = parseInt(prompt(`Enter the ${i+1}th integer:`));
            array.push(num);
        }
    }

    readIntegers(arrayA);
    readIntegers(arrayB);

    for (let i = 0; i < 5; i++) {
        arrayC.push(arrayA[i]);
        arrayC.push(arrayB[i]);
    }

    return arrayC;
}

let resultArray = combineArrays();
alert("Array C:", resultArray);
