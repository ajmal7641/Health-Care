import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import { config } from "dotenv"
import authRoute from './Routes/auth.js'
import userRoute from './Routes/user.js'
import doctorRoute from './Routes/doctors.js'
import reviewRoute from './Routes/review.js'




config()

const app = express()
const port = process.env.PORT  || 8000

const corsOptions = {
      origin : true
}

app.get('/', (req,res) => {
      res.send('Api is working ')
})

mongoose.set('strictQuery',false)

const connectDB = async() => {
      try {
           await  mongoose.connect(process.env.MONGO_URL)
            console.log("MongoDB database is connected");
      } catch (err) {
            console.log('Mongo databse connection is failed');
      }
}

// middleware

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/auth',authRoute) 
app.use('/api/v1/users',userRoute) 
app.use('/api/v1/doctors',doctorRoute) 
app.use('/api/v1/reviews',reviewRoute) 






app.listen(port, ()=>{
      connectDB()
      console.log('Server  is Running on port ' +port);
})
