const mongoose = require('mongoose');

const insumoSchema = new mongoose.Schema({
    idinsumo: { type: Number, required: true, unique: true },
    nominsumo: { type: String, required: true },
    idproveedor: { type: Number, required: true },
    preUni: { type: Number, required: true },
    stock: { type: Number, required: true }
});

module.exports = mongoose.model('TB_INSUMO', insumoSchema,'TB_INSUMO');
