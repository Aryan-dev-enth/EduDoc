import mongoose from 'mongoose';

const connectDb = async ( DATABASE_URL )=>{
    try {
        await mongoose.connect( DATABASE_URL, {
            dbName: "Edu-Doc"
        })
        console.log("Connected to mongoDB...");
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDb;