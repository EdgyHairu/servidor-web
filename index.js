const http = require('http')
const port = 5000 //Definir el port para evitar conflictos

const server = http.createServer((req, res) => {
    res.end('Hola Profe')
})

server.listen(port, () => {
    console.log('Arranca el servidor')
})