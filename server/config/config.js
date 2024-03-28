import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const MONGO_URI = process.env.MONGO_URI

const dbConnection = async () =>{
    try {
        const connect = await mongoose.connect(`${MONGO_URI}/${DB_NAME}`)
        console.log(`Database Connected To: ${connect.connection.host}`)
    } catch (error) {
        console.error(`Database Connection Failed: ${error}`)
        process.exit(1)
    }
}

export default dbConnection