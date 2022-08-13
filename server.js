const express = require('express');
const db = require('./db')
const app = express();
const postsRouter = require('./routes/posts.routes')

db.connect();
app.use(express.json())
app.use(postsRouter)

app.listen(3000, () => {
    console.log('¡hola! servidor está escuchando en el puerto 3000 :)')
})
