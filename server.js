// importar el modulo http de Node.js
const http = require('http');

const fs = require('fs').promises;

// definir el puerto y la direccion del servidor
const PORT = 3000;

// crear el servidor
const servidor = http.createServer((req, res) => {
 // lectura asincrona: no bloquea el evento loop
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error al leer el archivo.');
            return;
        } 
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
});

// iniciar el servidor y escuchar en el puerto definido
servidor.listen(PORT, () => {
    console.log(`El servidor se está ejecutando en el puerto ${PORT}/`);
});

const HOSTNAME = '127.0.0.1';