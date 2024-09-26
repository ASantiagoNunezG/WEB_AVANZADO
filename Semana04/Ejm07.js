/*const http = require('http');
const server = http.createServer((req, res) =>{
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/plain' });
        res.end('Welcome to the home page!');
    }else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('About us page. \n');
    }else if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('UwU');
    }else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found!');
    }
});

server.on('request', (req, res) => {
    console.log(`Request recived for URL: ${req.url}`);
});
server.listen(3000, () => {
    console.log('Server corriendo en el puerto 3000')
})*/

const http = require('http');
// Función para enviar la respuesta
const enviarRespuesta = (res, codigo, mensaje) => {
    res.writeHead(codigo, { 'Content-Type': 'text/plain' });
    res.end(mensaje);
};
// Rutas
const rutas = {
    '/home': 'Welcome to the home page!',
    '/about': 'About us page.'
};
// Crear el servidor
const server = http.createServer((req, res) => {
    const mensaje = rutas[req.url]; // Obtiene el mensaje de la ruta correspondiente

    if (mensaje) {
        enviarRespuesta(res, 200, mensaje);
    } else {
        enviarRespuesta(res, 404, 'Page not found!');
    }
});
// Evento para registrar solicitudes
server.on('request', (req, res) => {
    console.log(`Request received for URL: ${req.url}`);
});

// Iniciar el servidor
server.listen(3000, () => {
    console.log('Server corriendo en el puerto 3000');
});
