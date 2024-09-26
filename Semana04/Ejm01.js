const { error } = require("node:console")
const fs = require("node:fs/promises")

fs.writeFile("./archivo2b.txt", "línea 1\nLínea 2\n creando con promesas.")
.then(()=>{
    console.log("El archivo de texto fue creado empleando promesas")
})
.catch(error => {
    console.log(error)
})
console.log("Última línea del programa")