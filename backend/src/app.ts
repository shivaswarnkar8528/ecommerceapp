import express from 'express'
import userRoute from './routes/user';
import { connectDB } from './utils/features';
import { errorMiddleware } from './middlewares/error';

connectDB();
const app=express();
//adding middleware
app.use(express.json());
const port=4000;


app.get("/",(req,res)=>{
    res.send("API is working fine")
})
app.use("/api/v1/user",userRoute);



//middleware for handle error
app.use(errorMiddleware);
app.listen(port,()=>{
    console.log("server is running",port);
});
