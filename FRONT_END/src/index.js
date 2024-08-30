import express from 'express';
import morgan from'morgan';

const app = express();

app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get('/', (req, res) => {
    res.json({"message": "Hola mundooooooo!!!"});
});

app.get('/img', (req, res) => {
    res.sendFile(__dirname + '../descarga.jpeg');
});





app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Cargando y corriendo en el puerto ...', app.get('port'));
});
