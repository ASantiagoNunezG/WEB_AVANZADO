const express = require('express');
const router = express.Router();
const insumoController = require('../controllers/insumoController');

// Ruta para obtener insumos y renderizar la vista
router.get('/', insumoController.getInsumos); // Llama directamente a la función

module.exports = router;
