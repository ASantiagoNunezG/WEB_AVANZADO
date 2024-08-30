const https = require('https');

const options = {
    hostname: 'reqres.in',
    path: '/api/users',
    method: 'GET',
};

const req = https.request(options, (res) => {
    let data = '';

    //Recibir fragmento de datos
    res.on('data', (chunk) => {
        data += chunk;
    });

    //Una vez que todos los datos se han recibido, procesarlos
    res.on('end', () => {
        console.log(JSON.parse(data));
    });
});

//Manejar errores en caso de problemas con la petición
req.on('error', (error) => {
    console.error(`Error en la solicitud: ${error.message}`);
});

//Finalizar la solicitud
req.end();