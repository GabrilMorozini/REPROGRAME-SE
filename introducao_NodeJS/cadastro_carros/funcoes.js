const fs = require('fs');

exports.cadastrarCarro = async function cadastro() {
  obterDados();
  if (placa != '' && nome != '' && montadora != '') {
    let dadosLidos = '';
    try {
      dadosLidos = await leituraDados();
    } catch (err) {
      console.log('Erro de leitura. Insira os dados e tente novamente...');
      return;
    }

    let objDadosLidos = tratamentoDadosLidos(dadosLidos);
    objDadosLidos.push({ placa: placa, nome: nome, montadora: montadora });

    let JSONDadosAtualizados = JSON.stringify({ carros: objDadosLidos });

    try {
      await escritaDados(JSONDadosAtualizados);
      console.log('Carro cadastrado com sucesso... ')
    } catch (err) {
      console.log('Erro ao tentar salvar. Insira os dados e tente novamente...');
      return;
    }
  } else {
    console.log('Preencha todos os campos por favor');
  }
}

exports.listarCarros = async function listar() {
  let dadosLidos = '';
  try {
    dadosLidos = await leituraDados();
  } catch (err) {
    console.log('Erro de leitura, tente novamente...');
    return;
  }
  let objDadosLidos = tratamentoDadosLidos(dadosLidos);
  console.table(objDadosLidos);
}

function obterDados() {
  placa = prompt('Digite a placa do carro: ');
  nome = prompt('Digite o nome do carro: ');
  montadora = prompt('Digite a montadora do carro: ');
}

function leituraDados() {
  return new Promise((resolve, reject) => {
    fs.readFile('./cadastros.json', 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

function tratamentoDadosLidos(dadosLidos) {
  let objDadosLidos = JSON.parse(dadosLidos);
  return objDadosLidos.carros;
}

function escritaDados(JSONDadosAtualizados) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./cadastros.json', JSONDadosAtualizados, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}