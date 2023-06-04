//Importando bibliotecas e arquivos
const database = require('./db');
const Fornecedor = require('./models/fornecedor');

//SERVIDOR 
const express = require('express');
const app = express();
const porta = 9443;
const bodyParser = require('body-parser');

//View e engine 
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(express.urlencoded({ extented: true }));

//Rotas
app.get('/', (req, res) => {
  res.render('formFornecedor');
})

app.post('/addfornecedor', (req, res) =>{
  Fornecedor.create({
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email
  }).then(function(){
    res.send('Fornecedor cadastrado com sucesso!')
  })
})

app.listen(porta, () => { console.log('Servidor rodando') });

//Sincronismo
(async () => {
  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
})();