const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar EJS
app.set('view engine', 'ejs');

// MIDDLEWARE para ver errores
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).send('Algo salió mal: ' + err.message);
});

// Ruta para la RAÍZ
app.get('/', (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        console.error('Error al renderizar:', error);
        res.status(500).send('Error al cargar la página: ' + error.message);
    }
});

// Tus otras rutas
app.get('/pagina', (req, res) => {
    res.render('index');
});

app.get('/Hola', (req, res) => {
    res.send("<h1>hola mundo</h1>");
});

// UN SOLO listen
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});