const prompt = require('prompt-sync')();
var array_notebooks = [];

do {
  console.log("Sistema de Cadastro de Notebooks");
  console.log("1 - Inserir Notebook");
  console.log("2 - Excluir Notebook");
  console.log("3 - Listar Notebooks");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Notebook...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let marca = prompt("Digite a marca: ");
    let processador = prompt("Digite o processador: ");
    let disco_rigido = prompt("Digite o tamanho do disco rígido:  ");
    let RAM = prompt("Digite o tamanho da memória RAM instalada: ");

    const notebook = {
      codigo: codigo,
      marca: marca,
      processador: processador,
      disco_rigido: disco_rigido,
      RAM: RAM
    }
    inserir_notebook(notebook)

  } else if (opcao == 2) {
    console.log("\n\nExcluindo Notebook...\n");
    let codigo = prompt("Digite o código do notebook: ");
    excluir_notebook(codigo)

  } else if (opcao == 3) {
    console.log("\n\nListando Notebook...\n");
    listar_notebook()

  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_notebook(notebook) {
  array_notebooks.push(notebook)
}

function excluir_notebook(codigo) {
  for (i = 0; i < array_notebooks.length; i++) {
    note = array_notebooks[i]
    if (codigo == note.codigo) {
      array_notebooks.splice(i, 1)
    }
  }
}

function listar_notebook() {
  for (i = 0; i < array_notebooks.length; i++) {
    note = array_notebooks[i]
    console.log("Cod " + note.codigo + " : " + note.marca + " - " + note.processador + " - " + note.disco_rigido + " - " + note.RAM)
  }
}
