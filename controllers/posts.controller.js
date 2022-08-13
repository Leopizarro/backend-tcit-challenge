const db = require('../db')

const getAllPosts = (req, res) => {
    db.query('SELECT * FROM posts')
    .then(queryRes => res.send(queryRes.rows))
    .catch(err => res.send(err.stack))
}

const deletePost = (req, res) => {
    const deleteQuery = 'DELETE FROM posts WHERE id=$1 RETURNING *'
    const deleteValue = [req.query.id]
    db.query(deleteQuery, deleteValue)
    .then(deleteQueryRes => res.send(deleteQueryRes.rows[0]))
    .catch(err => console.log(err.stack))
}

const createPost = (req, res) => {
    const insertQuery = 'INSERT INTO posts (name, description) VALUES($1, $2) RETURNING *'
    const insertValues = [req.body.title, req.body.description]
    db.query(insertQuery, insertValues)
    .then(queryRes => res.send(queryRes.rows[0]))
    .catch(err => console.log(err.stack))
}

module.exports = {
    getAllPosts,
    deletePost,
    createPost
};