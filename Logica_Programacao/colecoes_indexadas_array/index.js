const prompt = require('prompt-sync')();

alturas = [];
NmrAluno = 1;
maiorQue = 0;

for (i = 0; i < 10; i++) {
  alturas.push(parseFloat(prompt("Digite a altura: ")));
}

for (i = 0; i < 10; i++) {
  maiorQue = 0;
  for (j = 0; j < 10; j++) {
    if (alturas[i] > alturas[j]) {
      maiorQue++
    }
  }
  console.log("Aluno " + NmrAluno + ": maior que " + maiorQue + " aluno(s)")
  NmrAluno++
}