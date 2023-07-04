const express = require('express');
const Services  = require('../services/services');
const router = express.Router();

router.get('/', (req, res)=>{
  // res.send('Seja bem ao nosso sistema de tarefas.')
  res.redirect('/tarefas/listar')
})

//////////////////TAREFAS//////////////////
router.get('/tarefas/cadastrar', (req, res)=>{
  res.render('tarefas/cadastrar');
})

//ROTA PARA O SERVIÇO DE CREATE
router.post('/tarefas/Create', Services.TarefaCreate);

//ROTA PARA O SERVIÇO LISTAR 
router.get('/tarefas/listar', Services.TarefaListar);

//ROTA PARA O SERVIÇO UPDATE 
router.post('/tarefas/Update', Services.TarefaUpdate);

//ROTA PARA O SERVIÇO DELETE
router.post('/tarefas/Delete', Services.TarefaDelete);


//ROTA PARA O FORMULARIO UPDATE
router.get('/tarefas/Atualizar/:id_tarefa/:titulo/:descricao', (req, res)=>{
  let tarefas = {
    id_tarefa: req.params.id_tarefa,
    titulo: req.params.titulo, 
    descricao: req.params.descricao
  }
  res.render('tarefas/update', {tarefas});
});

//////////////////USUARIOS//////////////////
router.get('/usuarios/cadastrar', (req, res)=>{
  res.render('usuarios/cadastrarUser');
})

//ROTA PARA O SERVIÇO DE CREATE
router.post('/usuarios/Create', Services.UsuarioCreate);

//ROTA PARA O SERVIÇO LISTAR 
router.get('/usuarios/listar', Services.UsuarioListar);


module.exports = router;