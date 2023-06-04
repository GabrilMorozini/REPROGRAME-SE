const database = require('./db/db');
const express = require('express');
const app = express();
const filme = require('./models/filme');
const filmeRoutes = require('./routes/routesFilme');
const filmeControllers = require('./controllers/controllerFilme');
const hand = require('express-handlebars');

app.engine('handlebars', hand.engine());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({extended:true}));

app.use(express.json());
app.use(express.static('public'));

app.use('/', filmeRoutes);

try {
  database.sync().then(() => {
    app.listen(9443, () => { console.log('Servidor rodando!') });
  })
} catch (erro) {
  console.log('Houve uma falha ao sincronizar com o banco de dados', erro);
};