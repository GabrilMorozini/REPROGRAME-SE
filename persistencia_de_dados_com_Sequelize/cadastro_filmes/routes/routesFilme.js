const express = require('express');
const ControllerFilme = require('../controllers/controllerFilme');
const router = express.Router();

router.get('/', ControllerFilme.listarFilmes);

router.get('/cadastrar', ControllerFilme.cadastrarFilme);
router.post('/cadastrar', ControllerFilme.filmeCreate);

router.get('/update/:id_filme', ControllerFilme.updateFilme);
router.post('/update', ControllerFilme.filmeUpdate);

router.post('/remover', ControllerFilme.removerFilme);

module.exports = router;