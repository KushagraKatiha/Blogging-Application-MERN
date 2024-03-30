import { Router } from 'express'
import { createPost, getPosts, deleteUserPost, getUserPosts, updatePost, searchPosts } from '../controllers/post.controller.js'
import jwtAuth from '../middleware/auth.middleware.js'

const postRouter = Router()

postRouter.route('/get-posts').get(getPosts)
postRouter.route('/search').post(searchPosts)

// Secured Routes
postRouter.route('/create').post(jwtAuth, createPost)
postRouter.route('/get-user-posts').get(jwtAuth, getUserPosts)
postRouter.route('/delete/:postId').delete(jwtAuth, deleteUserPost)
postRouter.route('/update/:postId').put(jwtAuth, updatePost)

export default postRouter


