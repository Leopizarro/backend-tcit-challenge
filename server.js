const express = require('express');
const db = require('./db')
const app = express();
const cors = require('cors');
const postsRouter = require('./routes/posts.routes')

db.connect();
app.use(express.json())
app.use(cors());
app.use(postsRouter)

app.listen(3000, () => {
    console.log('¡hola! servidor está escuchando en el puerto 3000 :)')
})
