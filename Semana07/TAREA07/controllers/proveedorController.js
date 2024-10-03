const Proveedores = require('../models/Proveedores');

exports.getProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedores.find();
        return proveedores;
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Otros métodos para crear, actualizar, y eliminar proveedores...
