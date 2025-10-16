//3) Use filter para pegar apenas os números ímpares.
const listNumeros = [1,2,3,4,5,6,7,8,9,10];
const impares = listNumeros.filter((numero) => numero %2 != 0);

console.log("Lista original: ",listNumeros);
console.log("Números ímpares: ",impares);