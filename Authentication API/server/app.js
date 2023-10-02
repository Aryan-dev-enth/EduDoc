import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDb from './config/connect.js';

//importing routes
import userRoutes from './routes/userRoutes.js';


//functions
import { connect } from 'mongoose';





//.env exports 
const port=process.env.PORT;
const dbURL=process.env.DBURL;

const app=express();
app.use(express.json());

//Loading routes
app.use("/api/user",userRoutes);



//middlewares
app.use(cors());
app.use(express.json());
app.listen(port,()=>{
    connectDb(dbURL);
    console.log(`Server listening at http://localhost:${port}`)
})