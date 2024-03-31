import {Router} from 'express'
import { deleteUser, forgetPassword, getUser, loginUser, logoutUser, refreshAccessToken, registerUser, resetPassword, updatePassword, updateUser } from '../controllers/user.controller.js'
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
userRouter.route('/forget-password').post(forgetPassword)
userRouter.route('/reset-password/:resetToken').post(resetPassword)

export default userRouter