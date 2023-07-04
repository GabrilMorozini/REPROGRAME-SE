const axios = require("axios");

module.exports = class Services {

  //VERIFICAR USUARIOS
  static async funcionarioLogin(req, res){
    let valores = req.body;
    const options = {
      url: "https://apilivraria.com/login",
      method: "POST",
      data: valores
    };
    axios(options).then((funcionario) =>{
      if(funcionario != undefined){
        return res.render("funcionarios/logado")
      }
      res.render("funcionarios/cadastrar")
    })
  }

  //CRIAR FUNCIONÁRIO
  static async funcionarioCreate(req, res){
    let valores = req.body;
    const options =  {
      url: "https://apilivraria.com/funcionarios/cadastrar",
      method: "POST",
      data: valores
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", {mensagem});
  }

  ////////////////LIVRO////////////////
  
  //CADASTRAR LIVRO
  static async livroCreate(req, res){
    let valores = req.body;
    const options =  {
      url: "https://apilivraria.com/livros/cadastrar", 
      method: "POST",
      data: valores
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", {mensagem});
  }

  //LISTAR LIVRO
  static async livroListar(req, res){
    const options = {
      url: "https://apilivraria.com/livros/listar",
      method: "GET",
      data:{}
    };
    axios(options).then(response =>{
      const livro = response.data
      res.render("livros/listar", {livro});
    })
  }
}