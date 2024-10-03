const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
    idproveedor: { type: Number},
    nombrecia: { type: String}
});

module.exports = mongoose.model('Proveedores', proveedorSchema,'Proveedores');
