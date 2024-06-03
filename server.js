import express from 'express';
import { config } from 'dotenv';
config();
import { connectToDB } from './src/configs/db.js';
import { userRouter } from './src/routers/userRouter.js';
import { bookRouter } from './src/routers/bookRouter.js';
import auth from './src/middlewares/auth.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
    origin:true
}))

const port = 7007 ;
const url = process.env.URL ;

app.get('/home', (req,res)=>{
    res.send("this is home route");
})

app.use('/user', userRouter)

app.use('/book',auth, bookRouter)

app.listen(port , async()=>{
    try {
       console.log(`server running on port ${port}`)
       await connectToDB(url);
    } catch (error) {
    console.log("error while running server", error.message); 
    }
})