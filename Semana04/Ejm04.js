//EL IIFE (Inmediatly-Invoked Function Expression) al ejecutarse añade el primer frame al stack de llamada

(()=>{
    console.log("1. Hola")

    setTimeout(() => {
        console.log('2. Mundo');
    })

    setTimeout(() => {
        console.log('3. A todos');
    }, 0);

    console.log('4. Este es un mensaje de extra');

    console.log('5. ¿Acertaste el orden de la salida?');
})();


