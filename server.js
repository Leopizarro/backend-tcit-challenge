const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('¡hola! servidor está escuchando en el puerto 3000 :)')
})