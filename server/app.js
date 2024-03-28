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


export default app