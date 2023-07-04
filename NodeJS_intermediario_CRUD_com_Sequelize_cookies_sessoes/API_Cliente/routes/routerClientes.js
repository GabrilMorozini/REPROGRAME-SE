const express = require('express');
const clienteController = require('../controller/clienteController');
const router = express.Router();

router.get('/', clienteController.requisicaoPrincipal);

//CADASTRAR
router.post('/cadastrar', clienteController.clienteCreate);

//LISTAR
router.get('/clientes/:id?', clienteController.clienteListar);

//UPDATE
router.put('/clientes/:id', clienteController.clienteUpdate);

//DELETE
router.delete('/clientes/:id', clienteController.clienteDelete);

module.exports = router;