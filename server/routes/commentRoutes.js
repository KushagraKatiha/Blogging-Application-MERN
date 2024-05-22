import { createComment, getComments } from "../controllers/comment.controller.js";
import { Router } from 'express'
import jwtAuth from '../middleware/auth.middleware.js'

const commentRouter = Router()

commentRouter.route('/create/:postId').post(jwtAuth, createComment)
commentRouter.route('/post/get/:postId').get(getComments)

export default commentRouter