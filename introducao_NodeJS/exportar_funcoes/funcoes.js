exports.pular = function() {
  console.log("\n")
}

exports.dados = function dados(nomes, notas) {
  for (i = 1; i <= 10; i++) {
    console.log("Aluno " + i)
    var nome = prompt("Nome do aluno: ")
    nomes.push(nome)
    var nota = prompt("Nota do aluno: ")
    notas.push(nota)
    console.log("\n")
  }
  console.clear();
}

exports.maiorNota = function maiorNota(notas) {
  let notaAlta = 0;
  let indexArray = 0;
  for (i = 0; i < notas.length; i++) {
    let comparador = parseFloat(notas[i]);
    if (comparador > notaAlta) {
      notaAlta = comparador;
      indexArray = i;
    }
  }
  return indexArray
}

exports.menorNota = function menorNota(notas) {
  let notaBaixa = notas[0];
  let indexArray = 0;
  for (i = 0; i < notas.length; i++) {
    let comparador = parseFloat(notas[i]);
    if (comparador < notaBaixa) {
      notaBaixa = comparador;
      indexArray = i;
    }
  }
  return indexArray
}

exports.media = function media(notas) {
  let soma = 0;
  for (i of notas) {
    soma = soma + parseFloat(i)
  }
  return soma / notas.length
}

exports.aprovados = function aprovados(notas) {
  let aprovados = 0;
  let reprovados = 5;
  for (i of notas) {
    if (i >= 60) {
      aprovados++
    }
  }
  return aprovados
}

exports.reprovados = function reprovados(notas) {
  let reprovados = 0;
  for (i of notas) {
    if (i < 60) {
      reprovados++
    }
  }
  return reprovados
}