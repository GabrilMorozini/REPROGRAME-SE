const express = require("express");
const router = express.Router();

const funcionarioController =  require("../controller/funcionarioController");
const livrosController = require("../controller/livrosController");

router.get("/", (req, res)=>{
  return res.json({message: "Sistema de Livraria"});
})

/////////////////////REQUISIÇÕES FUNCIONARIO/////////////////////

//POST - CADASTRAR
router.post("/funcionarios/cadastrar", funcionarioController.fucionarioCreate);

// POST - LOGIN 
router.post("/login", funcionarioController.verificarLoginFuncionario)

/////////////////////REQUISIÇÕES LIVROS/////////////////////

//POST - CADASTRAR
router.post("/livros/cadastrar", livrosController.livroCreate);

//POST - LISTAR
router.get("/livros/listar", livrosController.livroListar);





module.exports = router;