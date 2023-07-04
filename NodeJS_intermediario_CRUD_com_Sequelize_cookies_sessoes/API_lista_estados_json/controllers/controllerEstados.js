const Estado = require('../models/modelEstado');

module.exports = class estadosController {
  
  static async homePage(req, res){
        const estado = await Estado.findAll({raw:true});
      res.render('estados/home', {estado});
  }

  static cadastrar(req, res){
    res.render('estados/form')
  }

  //CADASTRO
  static async cadastroEstado(req, res){
    try {
      const estadoForm = {
      estado: req.body.estado,
      regiao: req.body.regiao
    }
    await Estado.create(estadoForm);
    res.json({estadoCadastrado:[{estado: estadoForm.estado, regiao: estadoForm.regiao }]});
    } catch (error) {
      res.render('estados/erro')
    }
  }
  
  //LISTAR
  static async listarEstados(req, res){
    const estado = await Estado.findAll({raw:true});
    res.json({lista_estados: estado});
  }

  //REMOVER
  static async removerEstados(req, res){
    const id_estado =  req.body.id_estado;
    console.log("ESSE È O ID ESTADO" + id_estado)
    await Estado.destroy({where: {id_estado: id_estado}});
    res.redirect('/');
  }  
};