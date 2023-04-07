const prompt = require('prompt-sync')();
const axios = require('./api.js');
const fs = require('fs');

exports.pular = function pular() {
  console.log('\n');
}

exports.cadastrarTarefa = async function cadastrarTarefa() {
  let id = prompt('Digite o ID da tarefa: ');
  let descricao = prompt('Digite a descrição da tarefa: ');

  if (id == '' || descricao == '') {
    console.log('Preencha todos os campos...');
  } else {
    try {
      await axios.api.post('/tarefas', {
        id: id,
        descricao: descricao,
        status: 'pendente'
      })
      console.log('Tarefa cadastrada com sucesso!');
    } catch (erro) {
      console.log('Erro ao cadastrar nova tarefa...');
    }
  }
}

exports.alterarTarefa = async function alterarTarefa() {
  let id = prompt('Digite o ID da tarefa que será alterada: ');
  let descricao = prompt('Digite a nova descrição para a tarefa: ');
  let tarefa;

  if (id == '' || descricao == '') {
    console.log('Preencha todos os campos...');
  } else {
    try {
      let response = await axios.api.get(`/tarefas/${id}`);
      tarefa = response.data;
      tarefa.descricao = descricao;
    } catch (erro) {
      console.log('Erro ao buscar tarefa...')
    }

    try {
      await axios.api.put(`/tarefas/${id}`, tarefa)
      console.log('Tarefa alterada com sucesso!')
    } catch (erro) {
      console.log('Erro ao alterar tarefa...')
    }
  }
}

exports.concluirTarefa = async function concluirTarefa() {
  let id = prompt('Digite o ID da tarefa que será concluida: ');
  let tarefa;

  if (id == '') {
    console.log('Informe o ID da tarefa...');
  } else {
    try {
      let response = await axios.api.get(`/tarefas/${id}`);
      tarefa = response.data;
    } catch (erro) {
      console.log('Erro ao buscar tarefa...')
    }

    if (tarefa.status == 'concluida') {
      console.log("Essa tarefa já está concluida!");
    } else {
      tarefa.status = 'concluida'

      try {
        await axios.api.put(`/tarefas/${id}`, tarefa)
        console.log('Tarefa concluida com sucesso!')
      } catch (erro) {
        console.log('Erro ao concluir tarefa...')
      }
    }
  }
}

exports.excluirTarefa = async function excluirTarefa() {
  let id = prompt('Digite o ID da tarefa que será excluida: ');

  if (id == '') {
    console.log('Informe o ID da tarefa...');
  } else {
    try {
      await axios.api.delete(`/tarefas/${id}`);
      console.log('Tarefa excluída com sucesso!')
    } catch (erro) {
      console.log('Erro ao excluir tarefa...')
    }

  }
}

exports.tarefasPendentes = function tarefasPendentes() {
  let arrayDados;
  try {
    let dados = fs.readFileSync('./db.json', 'utf-8');
    let objDados = JSON.parse(dados);
    arrayDados = objDados.tarefas;
  } catch (erro) {
    console.log('Erro ao tentar ler o arquivo de tarefas. Tente novamente por favor')
  }

  arrayTarefasPendentes = arrayDados.filter((tarefa) => {
    if (tarefa.status == 'pendente') {
      return tarefa
    }
  })

  if (arrayTarefasPendentes.length == 0) {
    console.log('Não existem tarefas pendentes!')
  } else {
    console.table(arrayTarefasPendentes)
  }
}

exports.tarefasConcluidas = function tarefasConcluidas() {
  let arrayDados;
  try {
    let dados = fs.readFileSync('./db.json', 'utf-8');
    let objDados = JSON.parse(dados);
    arrayDados = objDados.tarefas;
  } catch (erro) {
    console.log('Erro ao tentar ler o arquivo de tarefas. Tente novamente por favor')
  }

  arrayTarefasConcluidas = arrayDados.filter((tarefa) => {
    if (tarefa.status == 'concluida') {
      return tarefa
    }
  })

  if (arrayTarefasConcluidas.length == 0) {
    console.log('Não existem tarefas concluidas!')
  } else {
    console.table(arrayTarefasConcluidas)
  }
}