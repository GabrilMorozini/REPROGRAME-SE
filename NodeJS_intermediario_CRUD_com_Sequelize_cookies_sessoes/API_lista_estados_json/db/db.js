const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect : 'sqlite',
  storage : './estados.sqlite'
});

try{
  sequelize.authenticate();
  console.log('Banco de dados conectado');
}catch(erro){
  console.log('Erro ao conectar ao banco!', erro);
}

module.exports = sequelize;