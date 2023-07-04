const database = require('./db/db');
const express = require('express');
const app = express();
const estado = require('./models/modelEstado');
const routeEstados = require('./routes/estados');
const hand = require('express-handlebars');
const controller = require('./controllers/controllerEstados')

app.engine('handlebars', hand.engine());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//ROTAS
app.use('/', routeEstados);

try {
  database.sync().then(()=>{
    app.listen(443, () =>{console.log('Servidor Rodando')});
  });
} catch (error) {
  console.log('Houve uma falha ao sincronizar com o banco de dados.', erro);
};