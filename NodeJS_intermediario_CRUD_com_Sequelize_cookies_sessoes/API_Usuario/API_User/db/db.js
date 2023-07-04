//BIBLIOTECAS/MODULOS UTILIZADOS
const Sequelize = require('sequelize');

//CRIANDO A COMFIGURAÇÃO DO BANCO DE DADOS 
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './mercado.sqlite'
});

//TRATAMENTO POSSÍVEIS ERROS E AUTENTICANDO O BANCO
try {
  sequelize.authenticate();
  console.log('Banco de dados conectado com sucesso!');
}
catch (erro) {
  console.log('Erro ao conectar ao banco de dados', erro);
}

module.exports = sequelize;
