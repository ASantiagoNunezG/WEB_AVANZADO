/*const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('eventA', () =>{
    console.log('Listener 1 for eventA executed');
});

myEmitter.on('eventA', ()=>{
    console.log('Listener 2 for eventA executed');
});

myEmitter.emit('eventA');*/
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Funciones para manejar los eventos
const listener1 = () => {
    console.log('Listener 1 for eventA executed');
};

const listener2 = () => {
    console.log('Listener 2 for eventA executed');
};

// Array de listeners
const eventAListeners = [listener1, listener2];

// Registrar los listeners para eventA
eventAListeners.forEach(uu => {
    myEmitter.on('eventA', uu);
});

// Emitir el evento
myEmitter.emit('eventA');