import dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'

dotenv.config({
    path: './env'
})

const app = express()
app.use(cookieParser())
app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({extended: true, limit: '16kb'}))

import userRouter from './routes/userRoutes.js'
import postRouter from './routes/postRouter.js'
import commentRouter from './routes/commentRoutes.js'
import adminRouter from './routes/adminRouter.js'
app.use('/api/v1/user', userRouter)

// http://localhost:5000/api/v1/user/USER_ROUTE

app.use('/api/v1/post', postRouter)

// http://localhost:5000/api/v1/post/POST_ROUTE

app.use('/api/v1/comment', commentRouter)

// http://localhost:5000/api/v1/comment/COMMENT_ROUTE

app.use('/api/v1/admin', adminRouter)

// http://localhost:5000/api/v1/admin/ADMIN_ROUTE

export default app