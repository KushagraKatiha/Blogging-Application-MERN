import { Router } from 'express'
import { createPost,
    getPosts,
    deleteUserPost,
    getUserPosts,
    updatePost,
    searchPosts } from '../controllers/post.controller.js'
import jwtAuth from '../middleware/auth.middleware.js'

const router = Router()

router.route('/create').post(jwtAuth, createPost)
router.route('/get-posts').get(getPosts)
router.route('/get-user-posts').get(jwtAuth, getUserPosts)
router.route('/delete/:postId').delete(jwtAuth, deleteUserPost)
router.route('/update/:postId').put(jwtAuth, updatePost)
router.route('/search').post(searchPosts)

export default router


