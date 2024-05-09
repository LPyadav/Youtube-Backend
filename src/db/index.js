import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

export const connectDB = async () => {
    try {
        const connectionInstence = await mongoose.connect(
            `${process.env.MONGO_URI}/${DB_NAME}`
        )
        console.log(
            `\nMONGODB CONNECTED SUCCESSFULLY   : ${connectionInstence.connection.host}`
        )
    } catch (error) {
        console.error('MONGODB CONNECTION ERROR  : ', error)
        process.exit(1)
    }
}
