const express = require('express');
const connectDB = require('./config/db');
const proveedorRoutes = require('./routes/proveedorRoutes');
const insumoRoutes = require('./routes/insumoRoutes');
const path = require('path'); 

const app = express();

// Conectar a la base de datos
connectDB();
app.set('view engine', 'ejs');
// Middleware
app.use(express.json());

// Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));
// Rutas
app.get('/', (req, res) => {
    res.render("index")
});

app.use('/proveedores', proveedorRoutes);
app.use('/insumos', insumoRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
