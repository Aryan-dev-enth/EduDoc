const express=require('express');
const cors=require('cors');

const fs = require('fs');
const path = require('path');

const app=express();
const mongo=require('./db/connect.js');
app.use(cors());
const port=5000;


app.use(express.json());

app.use('/api',require('./routes/api.js'));




app.listen(port,()=>{
    
    mongo();
    console.log(`Notes on Cloud backend running on http://localhost:${port}`);
})