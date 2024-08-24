const express = require('express')
const app = express()

/*
app.get('/',(req, res)=>{
    res.sendFile('./static/index.html',{
        root:__dirname
    })
})
*/

const routes = require('./rutas.js')
const port = 3000

app.use(routes)
app.listen(port, ()=>{
    console.log('Server en el puerto ${3000}')
})

