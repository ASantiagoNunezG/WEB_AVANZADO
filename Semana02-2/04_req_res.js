const http = require('http');

const servidor = http.createServer((req, res) => {
    //console.log(req.url);
    console.log(req.method);
    //console.log(req.headers);
    //console.log(req.httpVersion);
    console.log(res.statusCode);
    res.end('Creando un servidor HTTP');
});
const port = 3000;

servidor.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});