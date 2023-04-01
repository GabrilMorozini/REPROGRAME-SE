const prompt = require('prompt-sync')();

//Inserção dos valores 
idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));

//Verificação da condição de aposento 
if (idade >= 65 || tempo >= 30 || idade >= 60 && tempo >= 25) {
  console.log("Você pode se aposentar!");

  // Comando de decisão da porcentagem (%) do aposento
  if (tempo > 20) {
    var aposento = salario * 0.8;
  }

  else {
    aposento = salario * 0.6;
  }

  // Comando de decisão do valor mínimo e máximo do aposento
  if (aposento > 7087.22) {
    aposento = 7087.22;
  }

  else if (aposento < 1212) {
    aposento = 1212;
  }

  else {
    aposento = aposento;
  }

  // Comando para exibir valor do aposento
  console.log("Seu sálario de aposentado será de: R$ ", aposento);
}

else {
  console.log("Você não pode se aposentar!");
}