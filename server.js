const express = require('express');
const db = require('./db')
const app = express();
const postsRouter = require('./routes/posts.routes')

db.connect();
app.use(express.json())
app.use(postsRouter)


// La propuesta visual contiene todas las funcionalidades en una misma vista (crear, eliminar, obtener posts)
// Crear posts -> post en ruta '/'
// Eliminar  -> delete en ruta '/'
// Obtener posts -> get en ruta '/'

app.listen(3000, () => {
    console.log('¡hola! servidor está escuchando en el puerto 3000 :)')
})

/* app.get('/', (req, res) => {
    client.query('SELECT * FROM posts')
    .then(queryRes => res.send(queryRes.rows))
    .catch(err => res.send(err.stack))
})

app.delete('/delete/', (req, res) => {
    const deleteQuery = 'DELETE FROM posts WHERE id=$1 RETURNING *'
    const deleteValue = [req.query.id]
    client.query(deleteQuery, deleteValue)
    .then(deleteQueryRes => res.send(deleteQueryRes.rows[0]))
    .catch(err => console.log(err.stack))
})

app.post('/', (req, res) => {
    const insertQuery = 'INSERT INTO posts (name, description) VALUES($1, $2) RETURNING *'
    const insertValues = [req.body.title, req.body.description]
    client.query(insertQuery, insertValues)
    .then(queryRes => res.send(queryRes.rows[0]))
    .catch(err => console.log(err.stack))
})
 */
