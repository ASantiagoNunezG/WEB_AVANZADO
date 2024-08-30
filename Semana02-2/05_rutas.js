const mi_url = new URL('htts://campus.tecsup.edu.pe/campus/Inicio.action')

console.log(mi_url.protocol);
console.log(mi_url.hostname);
console.log(mi_url.pathname);

console.log(mi_url.hostname.split('.'));