const TB_INSUMO = require('../models/TB_INSUMO');
const Proveedor = require('../models/Proveedores'); // Asegúrate de requerir tu modelo Proveedor

exports.getInsumos = async (req, res) => {
    try {
        // Obtén todos los insumos
        const insumos = await TB_INSUMO.find();

        // Extrae los idproveedor únicos de los insumos
        const proveedorIds = [...new Set(insumos.map(insumo => insumo.idproveedor))];

        // Obtén todos los proveedores que coincidan con esos ids
        const proveedores = await Proveedor.find({ idproveedor: { $in: proveedorIds } });

        // Crea un mapa de proveedores para un acceso fácil
        const proveedoresMap = {};
        proveedores.forEach(proveedor => {
            proveedoresMap[proveedor.idproveedor] = proveedor.nombrecia;
        });

        // Mapea los insumos para incluir el nombre del proveedor
        const insumosConProveedor = insumos.map(insumo => ({
            ...insumo._doc,
            nombreProveedor: proveedoresMap[insumo.idproveedor] || 'Desconocido' // Asigna nombre del proveedor
        }));

        // Renderiza la vista e inyecta los insumos con el nombre del proveedor
        res.render('insumos/index', { insumos: insumosConProveedor }); // Pasa los insumos a la vista
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
