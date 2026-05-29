const express = require('express');
const path = require('path');

const app = express();


const PORT = process.env.PORT || 3000;



app.set('view engine', 'ejs');

//codigo en visual studio

app.get('/pagina', (req, res) => {
    res.render('index');
});

app.get('/Hola', (req, res) => {
    res.send("<h1>hola mundo</h1>");
});

const server = app.listen(PORT, function() {
    console.log(`listening to port ${PORT}`);
});


app.listen(app.get('port'), () => {
    console.log("Servidor corriendo en el puerto 3000");
});