import { Router } from 'express'
import jwtAuth from '../middleware/auth.middleware.js'
import { deleteComment, deletePost, deleteUser } from '../controllers/admin.controller.js'

const adminRouter = Router()

adminRouter.route('/post/delete/:postId').delete(jwtAuth, deletePost)
adminRouter.route('/comment/delete/:commentId').delete(jwtAuth, deleteComment)
adminRouter.route('/user/delete/:toBeDeletedUserId').delete(jwtAuth, deleteUser)

export default adminRouter