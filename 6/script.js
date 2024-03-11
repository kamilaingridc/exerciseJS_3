// Desenvolva um programa que a partir de um vetor de Strings com 10 nomes 
// inicializados na declaração leia um novo nome e verifique se ele está 
// armazenado no vetor, se estiver, apresenta a posição (índice) onde ele está, 
// caso contrário, apresente a mensagem “Nome não encontrado!”

const names = ["Ingrid", "Duda", "Marilu", "Emanu", "IsaLinda", "Juju", "Davi", "Fernanda", "Lindomar", "Modesto"];

function checkName(name) {
    const index = names.indexOf(name);
    if (index !== -1) {
        alert(`The name "${name}" is stored in the array at position ${index}.`);
    } else {
        alert("Name not found!");
    }
}

checkName(prompt("Write a name: "));
