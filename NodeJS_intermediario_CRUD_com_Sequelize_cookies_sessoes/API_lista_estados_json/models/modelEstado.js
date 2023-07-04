const Sequelize = require('sequelize');
const database = require('../db/db')

const Estado = database.define('estado',{
  id_estado: {
    type: Sequelize.INTEGER, 
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  estado: {
    type: Sequelize.STRING, 
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O campo estado não pode estar vazio.'
      }
    }
  },
  regiao: {
    type: Sequelize.STRING, 
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O campo estado não pode estar vazio.'
      }
    }
  }
}, {database, modelname: 'estado', tableName: 'estados'});

module.exports = Estado;