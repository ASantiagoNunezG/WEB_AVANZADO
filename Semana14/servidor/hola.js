const express=require('express');
const conectarDB = require('./config/db.js')
const cors = require('cors')

const app = express();

conectarDB();
app.use(cors());

app.use(express.json());

app.use('/productos', require('./routes/producto.js'))


app.listen(4000, ()=>{
    console.log("el servidor esta corriendo en el puerto 4000")
});