const express = require('express');
const router = express.Router();
const path = require('path'); // Importar el módulo path
const axios = require('axios');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/comics', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/comics.html'));
});

router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/contact.html'));
});

module.exports = router;
