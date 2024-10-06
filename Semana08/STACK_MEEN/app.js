const exprees = require('express')
const Sequelize = require('sequelize')
const {Json} = require('sequelize/lib/utils')
const app = exprees()

//definimos los parametros de conexión
const sequelize = new Sequelize('data','root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
})

//definimos el modelo
const clientesModel = sequelize.define('clientes', {
    "id": {type:Sequelize.INTEGER, primaryKey: true},
    "nomcli": Sequelize.STRING,
    "apcli": Sequelize.STRING,
    "nrodnicli": Sequelize.STRING,
    "telcli":Sequelize.STRING
})

//autenticamos
sequelize.authenticate()
.then(()=>{
    console.log('conexión a la base de datos')
})
.catch(error =>{
    console.log("Error de conexión a la base de datos"+error)
})

//Mostramos todos los registros
clientesModel.findAll({attributes:['idcli','nomcli','apecli','nrodnicli','telcli']})
.then(clientes =>{
    const resultados = JSON.stringify(clientes)
    console.log(resultados)
})
.catch(error =>{
    console.log("No hay registros" + error)
})

app.listen(3000, ()=>{
    console.log('conectado a la base de datos')
})