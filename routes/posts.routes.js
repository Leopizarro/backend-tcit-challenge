const { Router } = require("express");
const  {
    createPost,
    deletePost,
    getAllPosts
} = require("../controllers/posts.controller")

const postsRouter = Router();

postsRouter.get('/posts', getAllPosts);

postsRouter.delete('/posts/:id', deletePost);

postsRouter.post('/posts', createPost);

module.exports = postsRouter;

