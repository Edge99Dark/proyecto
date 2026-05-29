const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar EJS
app.set('view engine', 'ejs');

// Ruta para la RAÍZ (/) - ESTO ES LO QUE FALTABA
app.get('/', (req, res) => {
    res.render('index');
});

// Tus otras rutas
app.get('/pagina', (req, res) => {
    res.render('index');
});

app.get('/Hola', (req, res) => {
    res.send("<h1>hola mundo</h1>");
});

// UN SOLO listen (eliminé el segundo)
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});