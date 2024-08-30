const http = require('http');
const {alumno} = require('./alumno');

const server = http.createServer((req, res) => {
    const ruta = req.url;

    if(ruta == '/') {
        return res.end('Bienvenido a las API');
    };

    if(ruta == '/alumno') {
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(alumno));
    };

    res.statusCode = 404;
    res.end('Recurso no encontrada');
});

server.listen(3000, () => {
    console.log('Server escuchando en el puerto 3000');
});