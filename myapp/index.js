const express = require('express');
const path = require('path');

const app = express();


app.set('port', process.env.PORT || 3000);


app.set('view engine', 'ejs');



app.get('/pagina', (req, res) => {
    res.render('index');
});

app.get('/Hola', (req, res) => {
    res.send("<h1>hola mundo</h1>");
});

app.listen(app.get('port'), () => {
    console.log("Servidor corriendo en el puerto 3000");
});