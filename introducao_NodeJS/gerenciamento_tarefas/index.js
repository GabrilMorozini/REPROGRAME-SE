const prompt = require('prompt-sync')();
const funcoes = require('./funcoes.js');

async function main() {
  do {
    console.log('----------------------- GERENCIAMENTO DE TAREFAS -----------------------');
    funcoes.pular();
    console.log('Bem vindo ao sistema de gerenciamento de tarefas, o que deseja fazer?');
    funcoes.pular();
    console.log('    1 - Cadastrar nova tarefa');
    console.log('    2 - Alterar uma tarefa');
    console.log('    3 - Marcar uma tarefa como concluída');
    console.log('    4 - Excluir uma tarefa');
    console.log('    5 - Listar tarefas pendentes');
    console.log('    6 - Listar tarefas concluídas');
    console.log('    0 - Sair do sistema');
    funcoes.pular();
    opcao = prompt('Digite a opção desejada: ');
    funcoes.pular();

    if (opcao == 1) {
      console.log('CADASTRANDO NOVA TAREFA...');
      await funcoes.cadastrarTarefa();
    } else if (opcao == 2) {
      console.log('ALTERANDO TAREFA...');
      await funcoes.alterarTarefa();
    } else if (opcao == 3) {
      console.log('CONCLUINDO TAREFA...');
      await funcoes.concluirTarefa();
    } else if (opcao == 4) {
      console.log('EXCLUINDO TAREFA...');
      await funcoes.excluirTarefa();
    } else if (opcao == 5) {
      console.log('LISTANDO TAREFAS PENDENTES...');
      await funcoes.tarefasPendentes();
    } else if (opcao == 6) {
      console.log('LISTANDO TAREFAS CONCLUIDAS...');
      await funcoes.tarefasConcluidas();
    } else if (opcao == '') {
      console.log('Entrada inválida. Tente novamente por favor... ');
      opcao = 'vazia';
    } else if (opcao == 0) {
      console.log('Obrigado por usar o sistema. Até mais =)');
      setTimeout(console.clear, 3000);
      break;
    } else {
      console.log('Escolha alguma opção do menu, tente novamente por favor...');
    }

    prompt('\nEnter para continuar...');
    console.clear();
  } while (opcao != 0);
}

main();