const http = require('http');

fs = require('fs');//Permite interectuar con los archivos del sistema fs
var html =fs.readFileSync('./index.html');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    fs.readFile('./index.html', function(error, html){
    res.write(html)
    res.end()
    })
})

server.listen(port, host, ()=>{
    console.log('server funcionando en ', host, port)
})