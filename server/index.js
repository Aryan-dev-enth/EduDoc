import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDb from './utils/connect.js';
import notesRoutes from './routes/notesRoutes.js'

const app = express();
const port = process.env.PORT;
const db_url = process.env.DB_URL;

app.use(cors()); 

app.use(express.json());

app.use("/api", notesRoutes );

connectDb(db_url);

app.listen(port, () => {
    console.log("Server running at ", port);
});