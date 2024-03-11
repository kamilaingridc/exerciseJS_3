// Desenvolva uma nova versão do programa anterior em que o usuário terá a quantidade de tentativas limitada a 5. 
// Caso o nome seja encontrado apresente a posição (índice) onde ele está e em qual tentativa ele foi encontrado.

const names = ["Ingrid", "Duda", "Marilu", "Emanu", "IsaLinda", "Juju", "Davi", "Fernanda", "Lindomar", "Modesto"];

function limitedNames(name) {
    let attempts = 5;
    while (attempts > 0) {
        const index = names.indexOf(name);
        if (index !== -1) {
            alert(`The name "${name}" was found at position ${index} on the ${6 - attempts} attempt.`);
            return;
        }
        alert(`Name not found! ${attempts - 1} attempts left.`);
    }
    alert("Exceeded attempts limit.");
}

limitedNames(prompt("Write a name: "));
 