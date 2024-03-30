import {Router} from 'express'
import { deleteUser, getUser, loginUser, logoutUser, refreshAccessToken, registerUser, updatePassword, updateUser } from '../controllers/user.controller.js'
import jwtAuth from '../middleware/auth.middleware.js'

const userRouter = Router()

userRouter.route('/register').post(registerUser)
userRouter.route('/login').post(loginUser)

// Secure Routes
userRouter.route('/logout').post(jwtAuth, logoutUser)
userRouter.route('/delete').delete(jwtAuth, deleteUser)
userRouter.route('/refresh-access').post(refreshAccessToken)
userRouter.route('/get-user').get(jwtAuth, getUser)
userRouter.route('/update').put(jwtAuth, updateUser)
userRouter.route('/update-password').put(jwtAuth, updatePassword)


export default userRouter