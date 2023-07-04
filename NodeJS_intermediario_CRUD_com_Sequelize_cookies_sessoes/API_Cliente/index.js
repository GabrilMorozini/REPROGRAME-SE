const express = require('express');
const app = express();
const database = require('./db/db');
const clienteRoutes = require('./routes/routerClientes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', clienteRoutes);

//SINCRONISMO 
try{
  database.sync().then(()=>{
    app.listen(3000, console.log('Servidor rodando!'))
  })
}catch(erro){
  console.log('Houve uma falha ao sincronizar com o banco de dados.', erro);
}

