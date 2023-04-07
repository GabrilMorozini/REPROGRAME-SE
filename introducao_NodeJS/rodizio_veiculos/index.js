const prompt = require('prompt-sync')();
const fs = require('fs');


function pular() {
  console.log('\n')
}

// RODIZIO DE VEICULOS 

console.log('------------------- RODIZIO -------------------')

function restricaoCirculacao() {
  console.log('Seu veículo NÃO PODE estar em circulação hoje!')
}

var placa = prompt('Digite a placa do veículo: ')
var finalPlaca = placa[placa.length - 1]

const dataAtual = new Date();
const offsetBrasilia = -180;
const horaBrasilia = new Date(dataAtual.getTime() + (offsetBrasilia * 60 * 1000));
var diaSemana = horaBrasilia.getDay()

if (diaSemana == 1 && finalPlaca == 1 || diaSemana == 1 && finalPlaca == 2) {
  restricaoCirculacao();
} else if (diaSemana == 2 && finalPlaca == 3 || diaSemana == 2 && finalPlaca == 4) {
  restricaoCirculacao();
} else if (diaSemana == 3 && finalPlaca == 5 || diaSemana == 3 && finalPlaca == 6) {
  restricaoCirculacao();
} else if (diaSemana == 4 && finalPlaca == 7 || diaSemana == 4 && finalPlaca == 8) {
  restricaoCirculacao();
} else if (diaSemana == 5 && finalPlaca == 9 || diaSemana == 5 && finalPlaca == 0) {
  restricaoCirculacao();
} else {
  console.log('Seu veículo PODE estar em circulação hoje')
}
pular()

// DATA POR EXTENSO
console.log('------------------- DATA POR EXTENSO -------------------')

function concatenarData(mes) {
  console.log(arrayData[0] + ' de ' + mes + ' de ' + arrayData[2]);
}

var mesesAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

var dataRecebida = prompt("Digite uma data no formato DD/MM/AAAA: ");
var arrayData = dataRecebida.split('/');
var mes = '';

for (i = 0; i <= 11; i++) {
  if (arrayData[1] == i + 1) {
    concatenarData(mesesAno[i]);
  }
}
pular()

// DIVSÃO
console.log('------------------- DIVSÃO -------------------')
var num1 = parseFloat(prompt('Digite o primeiro número: '));
var num2 = parseFloat(prompt('Digite o segundo número: '));

try{
  if(num2 == 0){
    throw new Error('Erro!!! Divisão por zero');
  }else{
    console.log('O resultado da divisão é ' + num1 / num2);   
  }
}catch(error){
  console.log(error.message);
}
pular()

// // JSON
console.log('------------------- JSON -------------------')
var pessoasJSON = fs.readFileSync("./pessoas.json", "UTF-8");
var pessoasOBJ = JSON.parse(pessoasJSON);
var arrayPessoas = pessoasOBJ.pessoas;
console.log(arrayPessoas)
