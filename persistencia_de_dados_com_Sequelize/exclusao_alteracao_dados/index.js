const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa.sqlite"
});

// Definindo a classe setor 
class Setor extends Model {
  static init(sequelize) {
    super.init({
      idsetor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      ramal: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(30),
      }
    }, { sequelize, modelname: "setor", tableName: "setores" })
  }
}

//inicialização do modelo create table setor 
Setor.init(sequelize);

//Sincronismo
(async () => {
  await sequelize.sync({ force: true });
  
  //CREATE - Criando setores
  const setor_create_F = await Setor.create({ nome: "Financeiro", ramal: "2134", email: "financeiro@empresa.com" });
  const setor_create_S = await Setor.create({ nome: "Secretaria", ramal: "2135", email: "secretaria@empresa.com" });
  const setor_create_P = await Setor.create({ nome: "Portaria", ramal: "2136", email: "portaria@empresa.com" });
  const setor_create_C = await Setor.create({ nome: "Contabilidade", ramal: "2137", email: "contabilidade@empresa.com" });
  const setor_create_D = await Setor.create({ nome: "Diretoria", ramal: "2138", email: "diretoria@empresa.com" });
  const setor_create_Rh = await Setor.create({ nome: "Recursos Humanos", ramal: "2139", email: "recursoshumanos@empresa.com" });

  //DELETE - Excluindo setor
  const setor_delete = await Setor.findByPk(4);
  setor_delete.destroy();

  //UPDATE - Alterando nome do setor 
  const setor_update = await Setor.findByPk(6);
  setor_update.nome = "Departamento Pessoal";
  const resultado = await setor_update.save();

    //READ - Listando setores
  const setores_listarA = await Setor.findAll();
  console.log("Lista de setores \n", JSON.stringify(setores_listarA, null, 2), "\n\n");
})();