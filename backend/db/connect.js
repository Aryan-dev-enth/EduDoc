const mongoose=require('mongoose');

const mongo=async ()=>{
    console.log("Connecting to Database...");
    mongoose.connect('mongodb+srv://aryan2003aisingh:aryan2003strange@cluster0.zv1qwma.mongodb.net/EduDoc').then(()=>{
        console.log("Connected to Database succesfully...")
    })
}

module.exports=mongo;