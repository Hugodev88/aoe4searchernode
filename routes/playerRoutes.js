const express = require('express');
const router = express.Router();
const PlayerController = require('../controllers/playerController');

// Define a rota para listar jogadores
router.get('/', PlayerController.searchPlayer);

router.get('/players', PlayerController.showPlayers);

// Define a rota para exibir um jogador específico
router.get('/player/:id', PlayerController.showPlayer);

module.exports = router;
