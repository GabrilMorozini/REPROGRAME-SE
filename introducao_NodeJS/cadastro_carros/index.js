const prompt = require('prompt-sync')();
const funcoes = require('./funcoes.js');

opcao = 1;

async function conteudo() {
  while (opcao != 0) {
    console.log('---------- SISTEMA DE CADASTRO DE CARROS ---------- \n')

    console.log('    1 - Listar carros');
    console.log('    2 - Cadastrar novo carro');
    console.log('    0 - Sair do sistema \n');
    opcao = prompt('Digite a opção desejada: ');
    console.log('\n');

    if (opcao == 1) {
      console.log("LISTANDO CARROS...")
      await funcoes.listarCarros();
    } else if (opcao == 2) {
      console.log("CADASTRANDO UM NOVO CARRO...")
      await funcoes.cadastrarCarro();
    }else if(opcao == 0){
      console.log("Saindo do sistema...")
      setTimeout(console.clear, 1000)
      break
    }else{
      console.log("Escolha alguma opção do menu, tente novamente por favor...")
    }
    prompt("\nEnter para continuar...");
    console.clear();
  }
}

conteudo();