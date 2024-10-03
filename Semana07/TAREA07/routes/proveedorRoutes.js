const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');


// Otras rutas para crear, actualizar y eliminar...
router.get('/', async (req, res)=>{
    try{
        const proveedores = await proveedorController.getProveedores();
        res.render('proveedores/index', {proveedores});
    }catch(error){
        console.error(error);
        res.status(500).send('Error al obtener proveedores')
    }
})
module.exports = router;
