import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import connect from './config/connect.js';
import userRoutes from './routes/userRoutes.js';
import notesRoutes from './routes/notesRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const PORT= process.env.PORT || 8001;
const DB_NAME = process.env.DB_NAME;
const MONGODB_STRING = process.env.MONGODB_STRING;
const BASE_URL = process.env.BASE_URL;

const app = express();

app.use(express.json());
app.use(cors());

//routes
app.use("/api/user", userRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/admin",adminRoutes)

app.listen(PORT, ()=>{
    connect(MONGODB_STRING, DB_NAME);
    console.log(`Server active at ${BASE_URL+PORT}`)
})