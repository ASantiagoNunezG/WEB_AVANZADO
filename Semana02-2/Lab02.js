const http = require('http');

const servidor = http.createServer((req, res) => {
    res.end('Creando un Servidor HTTP con Node.js');
});

const port = 3000;

servidor.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});