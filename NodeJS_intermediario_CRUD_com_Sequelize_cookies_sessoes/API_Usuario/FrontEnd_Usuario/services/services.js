const axios = require('axios');

module.exports = class Services {
  //////////////////TAREFAS//////////////////
  //CREATE
  static async TarefaCreate(req, res) {
    let valores = req.body;
    const options = {
      url: "https://listatarefas.com/tarefas/Cadastrar",
      method: "POST",
      data: valores
    };
    axios(options);
    const mensagem = 'Cadastro de tarefa realizado com sucesso!';
    res.render('mensagem', { mensagem })
  }

  //LISTAR
  static async TarefaListar(req, res) {
    const options = {
      url: "https://listatarefas.com/tarefas",
      method: "GET",
      data: {}
    };
    axios(options).then(response => {
      console.log(response.data);
      const tarefa = response.data
      res.render('tarefas/listar', { tarefa });
    })
  }

  //UPDATE
  static async TarefaUpdate(req, res) {
    let valores = req.body;
    const options = {
      url: "https://listatarefas.com/tarefas/" + valores.id_tarefa,
      method: "PUT",
      data: valores
    };
    axios(options);
    const mensagem = 'Registro de tarefa atualizado com sucesso';
    res.render('mensagem', { mensagem });
  }

  //DELETE
  static async TarefaDelete(req, res) {
    let id_tarefa = req.body.id_tarefa;
    const options = {
      url: "https://listatarefas.com/tarefas/" + id_tarefa,
      method: "DELETE"
    };
    axios(options);
    const mensagem = 'Tarefa excluida com sucesso!';
    res.render('mensagem', { mensagem });
  }
  
  //////////////////USUARIOS//////////////////
    //CREATE
  static async UsuarioCreate(req, res) {
    let valores = req.body;
    const options = {
      url: "https://listatarefas.com/usuarios/Cadastrar",
      method: "POST",
      data: valores
    };
    axios(options);
    const mensagem = 'Cadastro de usuário realizado com sucesso!';
    res.render('mensagem', { mensagem })
  }
  
  //LISTAR
  static async UsuarioListar(req, res) {
    const options = {
      url: "https://listatarefas.com/usuarios",
      method: "GET",
      data: {}
    };
    axios(options).then(response => {
      console.log(response.data);
      const usuarios = response.data
      res.render('usuarios/listarUser', { usuarios });
    })
  }
}

