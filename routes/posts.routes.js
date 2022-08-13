const { Router } = require("express");
const  {
    createPost,
    deletePost,
    getAllPosts
} = require("../controllers/posts.controller")

const postsRouter = Router();

postsRouter.get('/', getAllPosts);

postsRouter.delete('/delete/', deletePost);

postsRouter.post('/', createPost);

module.exports = postsRouter;

