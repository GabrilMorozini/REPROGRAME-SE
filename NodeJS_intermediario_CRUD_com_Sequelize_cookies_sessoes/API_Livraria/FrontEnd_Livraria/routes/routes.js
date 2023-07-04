const express = require("express");
const Services = require("../services/services");
const router = express.Router();

router.get("/", Services.livroListar);

//////////FUNCIONARIOS//////////
router.get("/login", (req, res)=>{
  res.render("funcionarios/login");
})
router.post("/login", Services.funcionarioLogin);


router.get("/funcionarios/cadastrar", (req, res)=>{
  res.render("funcionarios/cadastrar");
})
router.post("/funcionarios/cadastrar", Services.funcionarioCreate);

//////////LIVROS//////////
router.get("/livros/cadastrar", (req, res)=>{
  res.render("livros/cadastrar");
})
router.post("/livros/cadastrar", Services.livroCreate);

router.get("/livros/listar", Services.livroListar);


module.exports = router;