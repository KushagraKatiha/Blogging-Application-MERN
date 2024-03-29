import {Router} from 'express'
import { deleteUser, getUser, loginUser, logoutUser, refreshAccessToken, registerUser, updatePassword, updateUser } from '../controllers/user.controller.js'
import jwtAuth from '../middleware/auth.middleware.js'

const router = Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)

// Secure Routes
router.route('/logout').post(jwtAuth, logoutUser)
router.route('/delete').delete(jwtAuth, deleteUser)
router.route('/refresh-access').post(refreshAccessToken)
router.route('/get-user').get(jwtAuth, getUser)
router.route('/update').put(jwtAuth, updateUser)
router.route('/update-password').put(jwtAuth, updatePassword)


export default router