const prompt = require("prompt-sync")();

// Leitura dos 3 valores
var n1 = parseInt(prompt("Digite um número: "));
var n2 = parseInt(prompt("Digite um segundo número: "));
var n3 = parseInt(prompt("Digite um terceiro número: "));
// Calculo da soma e da média
var soma = n1 + n2 + n3;
var media = (n1 + n2 + n3) / 3;
// Exibe na tela o valor da soma e média
console.log("A soma dos números inseridos é ", soma);
console.log("A média dos números inseridos é ", media);
