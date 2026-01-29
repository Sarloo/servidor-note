// importar el modulo http de Node.js
const http = require('http');

// definir el puerto y la direccion del servidor
const PORT = 3000;

// crear el servidor
const servidor = http.createServer((req, res) => {
    // manejo de diferentes rutas
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('pagina principal\n');
    }
    else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('acerca de nosotros\n');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('pagina no encontrada\n');
    }
    
});

// iniciar el servidor y escuchar en el puerto definido
servidor.listen(PORT, () => {
    console.log(`El servidor se está ejecutando en el puerto ${PORT}/`);
});

const HOSTNAME = '127.0.0.1';