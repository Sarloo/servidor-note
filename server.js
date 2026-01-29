// importar el modulo http de Node.js
const http = require('http');

// definir el puerto y la direccion del servidor
const PORT = 3000;
const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hola Mundo\n');
});

// iniciar el servidor y escuchar en el puerto definido
servidor.listen(PORT, () => {
    console.log(`El servidor se está ejecutando en el puerto ${PORT}/`);
});

const HOSTNAME = '127.0.0.1';