import mongoose from 'mongoose'
import env from 'dotenv'
import { connectDB } from './db/index.js'
import { app } from './app.js'
env.config()
const port = process.env.PORT || 3000

// DB Connection
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}!`)
        })
    })
    .catch((err) => {
        console.log('MONGODB CONNECTION FAILED : ', err)
        process.exit(1)
    })

// Basic tecnique
/*const app = express();
const port = process.env.PORT||3000;


(async()=>{
    try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    app.on("error",(error) => {
        console.log("Error: ", error);
        throw error;
    })
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))


} catch (error) {
    console.error("Error: " , error);
    throw error;
        
}
})()*/
