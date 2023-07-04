const express = require('express');
const controllerEstados = require('../controllers/controllerEstados');
const router = express.Router();

router.get('/', controllerEstados.homePage);

router.get('/cadastrar', controllerEstados.cadastrar);
router.post('/cadastrado', controllerEstados.cadastroEstado);

router.get('/listar', controllerEstados.listarEstados);

router.post('/remover', controllerEstados.removerEstados);


module.exports = router;