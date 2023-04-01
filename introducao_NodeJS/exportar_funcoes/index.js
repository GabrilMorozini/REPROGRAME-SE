const prompt = require("prompt-sync")();
const funcoes = require("./funcoes.js");

var nomes = [];
var notas = [];

funcoes.dados(nomes, notas);
const indexMaiorNota = funcoes.maiorNota(notas);
const indexMenorNota = funcoes.menorNota(notas);
const media = funcoes.media(notas);
const aprovados = funcoes.aprovados(notas);
const reprovados = funcoes.reprovados(notas);


console.log("A maior nota foi de " + notas[indexMaiorNota] + " retirada por " + nomes[indexMaiorNota] + ".");

funcoes.pular();

console.log("A menor nota foi de " + notas[indexMenorNota] + " retirada por " + nomes[indexMenorNota] + ".");

funcoes.pular();

console.log("A media de todas as notas foi de " + media + ".");

funcoes.pular();

if (aprovados == 0) {
  console.log("Infelizmente nenhum aluno foi aprovado!");
}

else if (aprovados == 1) {
  console.log(aprovados + " aluno foi aprovado!");
}

else {
  console.log(aprovados + " alunos foram aprovados!");
}

funcoes.pular();

if (reprovados == 0) {
  console.log("Felizmente nenhum aluno foi reprovado!");
}

else if (reprovados == 1) {
  console.log(reprovados + " aluno foi reprovado!");
}

else {
  console.log(reprovados + " alunos foram reprovados!")
}